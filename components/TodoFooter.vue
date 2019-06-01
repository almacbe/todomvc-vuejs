<template>
  <!-- This footer should hidden by default and shown when there are todos -->
  <footer v-show="hasTodoItems" class="footer">
    <todo-item-left />

    <filter-links />

    <clear-completed />
  </footer>
</template>

<script>
import ClearCompleted from './ClearCompleted'
import FilterLinks from './FilterLinks'
import TodoItemLeft from './TodoItemLeft'

export default {
  components: { ClearCompleted, FilterLinks, TodoItemLeft },
  computed: {
    hasTodoItems: function() {
      return this.$store.state.todoItems.all.length > 0
    }
  }
}
</script>
