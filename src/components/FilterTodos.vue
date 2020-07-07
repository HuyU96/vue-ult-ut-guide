<template>
  <div>
    Filter:
    <select @change="filterTodos($event)">
      <option v-for="(option, index) in options"
              :key="index"
              :value="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'FilterTodos',
  data () {
    return {
      options: [10, 20, 50, 100, 150, 200]
    }
  },
  methods: {
    ...mapActions('todos', ['filterTodos'])
  }
}
</script>

<style>
select {
  margin-top: 20px;
  padding: 6px;
  border: #41b883 1px solid;
}
</style>
