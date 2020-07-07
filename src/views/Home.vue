<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="container">
      <add-todo />
      <filter-todos />
      <todos />
    </div>
  </div>
</template>

<script>
import Todos from '@/components/Todos'
import AddTodo from '@/components/AddTodo'
import FilterTodos from '@/components/FilterTodos'

export default {
  name: 'Home',
  components: {
    Todos,
    AddTodo,
    FilterTodos
  }
}
</script>
