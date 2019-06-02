<template>
  <!-- This should be `0 items left` by default -->
  <span class="todo-count">
    <strong>{{ todoItemLeft }}</strong> item left
  </span>
</template>
<script>
export default {
  computed: {
    todoItemLeft: function() {
      return this.$store.getters['todoItems/itemsLeft'].length
    }
  }
}
</script>
