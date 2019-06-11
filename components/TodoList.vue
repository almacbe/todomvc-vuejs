<template>
  <!-- This section should be hidden by default and shown when there are todos -->
  <section v-show="hasTodoItems" class="main">
    <toggle-all-todo-items />
    <ul class="todo-list">
      <!-- These are here just to show the structure of the list items -->
      <!-- List items should get the class `editing` when editing and `completed` when marked as completed -->
      <todo-item v-for="item in items" :key="item.id" :item="item"></todo-item>
    </ul>
  </section>
</template>
<script>
import TodoItem from './TodoItem'
import ToggleAllTodoItems from './ToggleAllTodoItems'

export default {
  components: { TodoItem, ToggleAllTodoItems },
  computed: {
    hasTodoItems: function() {
      return this.$store.getters['todoItems/list'].length > 0
    },
    items: function() {
      if (this.isAllFilter) {
        return this.$store.getters['todoItems/list']
      }

      if (this.isActiveFilter) {
        return this.$store.getters['todoItems/itemsLeft']
      }

      return this.$store.getters['todoItems/itemsCompleted']
    },
    isActiveFilter: function() {
      return this.filter === 'active'
    },
    isCompletedFilter: function() {
      return this.filter === 'completed'
    },
    isAllFilter: function() {
      return !this.isActiveFilter && !this.isCompletedFilter
    }
  },
  created() {
    this.filter = this.$route.params.filter
  }
}
</script>
