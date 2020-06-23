import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Counter from '@/components/Counter.vue'

describe('Counter', () => {
  let wrapper = null

  beforeEach(() => {
    wrapper = shallowMount(Counter)
  })

  afterEach(() => {
    wrapper.destroy()
  })

  it('renders the correct markup', () => {
    expect(wrapper.html()).to.contain('<span class="count">0</span>')
  })

  it('has a button', () => {
    expect(wrapper.find('button').exists()).to.be.true
  })

  it('increases count when button is clicked', () => {
    expect(wrapper.vm.count).to.equal(0)
    const button = wrapper.find('button')
    button.trigger('click')
    expect(wrapper.vm.count).to.equal(1)
  })

  it('updates the count text when button is clicked', async () => {
    expect(wrapper.text()).to.contain('0')
    const button = wrapper.find('button')
    await button.trigger('click')
    expect(wrapper.text()).to.contain('1')
  })
})
