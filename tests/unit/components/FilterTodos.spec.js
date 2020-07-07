// import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import FilterTodos from '@/components/FilterTodos.vue'

describe('FilterTodos', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(FilterTodos)
  })

  afterEach(() => {
    wrapper.destroy()
  })
})
