<template>
  <!-- This should be `0 items left` by default -->
  <span class="todo-count">
    <strong>{{ todoItemLeft }}</strong> item left
  </span>
</template>
<script>
export default {
  name: 'TodoItemLeft',
  computed: {
    todoItemLeft: function() {
      const todos = this.$store.state.todoItems.all.filter(
        item => !item.completed
      )
      return todos.length
    }
  }
}
</script>
