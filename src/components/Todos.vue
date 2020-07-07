<template>
  <div>
    <h3>Todos</h3>
    <div class="legend">
      <span>
        <span class="incomplete"></span> = Incomplete
      </span>
      <span>
        <span class="completed"></span> = Completed
      </span>
    </div>
    <div class="todos">
      <div v-for="todo in todos"
           :key="todo.id"
           class="todo"
           :class="{ 'is-completed': todo.completed }"
           @input="updateTodoTitle($event, todo)"
           @dblclick="checkComplete(todo)">
        <input type="text"
               rows="3"
               cols="25"
               :value="todo.title"
               :class="{ 'cross-completed': todo.completed }">
        <i class="fa fa-trash" @click="deleteTodo(todo.id)"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Todos',
  data () {
    return {
      todosQuery: {
        _start: 1,
        _limit: 10
      }
    }
  },
  computed: {
    ...mapGetters('todos', ['todos'])
  },
  created () {
    this.fetchTodosApi(this.todosQuery)
  },
  methods: {
    ...mapActions('todos', [
      'fetchTodosApi',
      'removeTodo',
      'updateStatus',
      'updateTitle'
    ]),
    deleteTodo (id) {
      this.removeTodo(id)
    },
    checkComplete (todo) {
      this.updateStatus(todo)
    },
    updateTodoTitle (e, todo) {
      this.updateTitle({
        value: e.target.value,
        todo: todo
      })
    }
  }
}
</script>

<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.todo {
  border: 1px solod #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
i {
  position: absolute;
  bottom: 18px;
  right: 10px;
  color: #fff;
  cursor: pointer;
}
.legend {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}
.completed {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #35495e;
}
.incomplete {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #41b883;
}
.is-completed {
  background: #35495e;
  color: #fff;
}
.cross-completed {
  text-decoration: line-through;
}
input[type="text"] {
  background: inherit;
  color: inherit;
  border: none;
  resize: none;
  overflow: hidden;
}
@media (max-width: 500px) {
  .todos {
    grid-template-columns: 1fr;
  }
}
</style>
