import { shallowMount } from '@vue/test-utils'
import { expect } from 'chai'
import Username from '@/components/Username.vue'

const factory = (values = {}) => {
  return shallowMount(Username, {
    data () {
      return {
        ...values
      }
    }
  })
}

describe('Username', () => {
  it('renders a welcome message', () => {
    const wrapper = factory()

    expect(wrapper.find('.message').text()).to.equal('Welcome to the Vue.js cookbook')
  })

  it('renders an error when username is less than 7 characters', () => {
    const wrapper = factory({ username: '' })

    expect(wrapper.find('.error').exists()).to.be.true
  })

  it('renders an error when username is whitespace', () => {
    const wrapper = factory({ username: ' '.repeat(7) })

    expect(wrapper.find('.error').exists()).to.be.true
  })

  it('does not render an error when username is 7 characters or more', () => {
    const wrapper = factory({ username: 'Lachlan' })

    expect(wrapper.find('.error').exists()).to.be.false
  })
})
