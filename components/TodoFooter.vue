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
      return this.$store.getters['todoItems/list'].length > 0
    }
  }
}
</script>
