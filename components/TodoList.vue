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
  name: 'TodoList',
  components: { TodoItem, ToggleAllTodoItems },
  props: {
    filter: String
  },
  computed: {
    hasTodoItems: function() {
      return this.$store.state.todoItems.all.length > 0
    },
    items: function() {
      const todos = this.$store.state.todoItems.all
      if (this.isAllFilter) {
        return todos
      }

      let done = true
      if (this.isActiveFilter) {
        done = false
      }

      return todos.filter(item => item.completed === done)
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
  }
}
</script>
