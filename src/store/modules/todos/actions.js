import Axios from 'axios'
import { mutationTypes } from './mutations'
import { getTodosUrl } from '@/services/json-placeholder'

const fetchTodosApi = async ({ dispatch }, payload) => {
  const response = await Axios.get(getTodosUrl(payload))
  dispatch('fetchTodos', response.data)
}

const fetchTodos = ({ commit }, payload) => {
  commit(mutationTypes.FETCH_ALL_TODOS, payload)
}

const addTodo = ({ commit }, payload) => {
  commit(mutationTypes.ADD_TODO, payload)
}

const removeTodo = ({ commit }, payload) => {
  commit(mutationTypes.REMOVE_TODO, payload)
}

const filterTodos = ({ dispatch }, payload) => {
  const queryParams = {
    _start: 1,
    _limit: parseInt(payload.target.value)
  }
  dispatch('fetchTodosApi', queryParams)
}

const updateStatus = ({ commit }, payload) => {
  commit(mutationTypes.UPDATE_STATUS, payload)
}

const updateTitle = ({ commit }, payload) => {
  commit(mutationTypes.UPDATE_TITLE, payload)
}

export default {
  fetchTodos,
  fetchTodosApi,
  addTodo,
  removeTodo,
  filterTodos,
  updateStatus,
  updateTitle
}
