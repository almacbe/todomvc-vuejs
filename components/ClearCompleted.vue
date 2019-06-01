<template>
  <!-- Hidden if no completed items are left ↓ -->
  <button v-show="hasSomeItemCompleted" class="clear-completed" @click="clear">
    Clear completed
  </button>
</template>
<script>
export default {
  computed: {
    hasSomeItemCompleted: function() {
      const todos = this.$store.state.todoItems.all.filter(
        item => item.completed
      )
      return todos.length > 0
    }
  },
  methods: {
    clear: function() {
      this.$store.commit('todoItems/clear')
    }
  }
}
</script>
