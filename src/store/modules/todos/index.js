import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const state = {
  todos: []
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
