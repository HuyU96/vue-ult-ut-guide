import uuidv4 from 'uuid'

const keyMirror = keys => {
  keys = Array.isArray(keys) ? keys : Object.keys(keys)

  let mirror = {}
  keys.forEach(v => mirror[v] = v)

  return mirror
}

export const mutationTypes = keyMirror([
  'FETCH_ALL_TODOS',
  'ADD_TODO',
  'REMOVE_TODO',
  'FILTER_TODOS',
  'UPDATE_STATUS',
  'UPDATE_TITLE'
])
// export const mutationTypes = keyMirror({
//   FETCH_ALL_TODOS: null,
//   ADD_TODO: null,
//   REMOVE_TODO: null,
//   FILTER_TODOS: null,
//   UPDATE_STATUS: null,
//   UPDATE_TITLE: null
// })

export default {
  [mutationTypes.FETCH_ALL_TODOS] (state, payload) {
    return state.todos = payload
  },
  [mutationTypes.ADD_TODO] (state, payload) {
    const todos = state.todos

    const newTodo = {
      id: uuidv4(),
      title: payload,
      completed: false
    }
    todos.unshift(newTodo)

    return state.todos = todos
  },
  [mutationTypes.REMOVE_TODO] (state, payload) {
    return state.todos = state.todos.filter(todo => todo.id !== payload)
  },
  [mutationTypes.UPDATE_STATUS] (state, payload) {
    return state.todos.map(todo => {
      if (todo.id === payload.id) todo.completed = !todo.completed
    })
  },
  [mutationTypes.UPDATE_TITLE] (state, payload) {
    return state.todos.map(todo => {
      if (todo.id === payload.todo.id) todo.title = payload.value
    })
  }
}
