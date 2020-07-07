import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import chai from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import AddTodo from '@/components/AddTodo.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

chai.use(sinonChai)
const expect = chai.expect

describe('AddTodo', () => {
  let wrapper, actions, store

  beforeEach(() => {
    actions = {
      addTodo: sinon.spy()
    }

    store = new Vuex.Store({
      modules: {
        todos: {
          namespaced: true,
          actions
        }
      }
    })

    wrapper = shallowMount(AddTodo, {
      store,
      localVue
    })
  })

  afterEach(() => {
    wrapper.destroy()
  })

  describe('data', () => {
    // Test v-model on input[type="text"]
    it('updates title', async () => {
      wrapper.setData({
        title: ''
      })

      const input = wrapper.find('input[type="text"]')
      input.element.value = 'New Todo'
      await input.trigger('input')

      expect(wrapper.vm.title).to.equal('New Todo')
    })
  })

  describe('methods', () => {
    // Test if method is called
    it('calls "onSubmit" method when form is submitted', () => {
      const onSubmitSpy = sinon.spy(wrapper.vm, 'onSubmit')

      const form = wrapper.find('form')
      form.trigger('submit.prevent')

      expect(onSubmitSpy).to.have.been.called
    })

    // Test attribute's value before and after async actions
    it('clears title input when form is submitted', async () => {
      wrapper.setData({
        title: ''
      })

      const input = wrapper.find('input[type="text"]')
      input.element.value = 'New Todo'
      await input.trigger('input')

      expect(wrapper.vm.title).to.equal('New Todo')

      const form = wrapper.find('form')
      await form.trigger('submit.prevent')

      expect(wrapper.vm.title).to.equal('')
    })

    // Test if action is dispatched when form is submitted
    it('dispatch "addTodo" action when form is submitted', async () => {
      const form = wrapper.find('form')
      await form.trigger('submit.prevent')

      expect(actions.addTodo).to.have.been.called
    })
  })
})
