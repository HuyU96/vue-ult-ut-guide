<template>
  <div>
    <span class="count">{{ count }}</span>
    <button @click="increase">Increase</button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        count: 0
      }
    },

    methods: {
      increase () {
        this.count++
      },
      decrease () {
        this.count--
      }
    }
  }
</script>
