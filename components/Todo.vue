<template>
  <section class="todoapp">
    <header class="header">
      <h1>todos</h1>
      <create-todo-item />
    </header>

    <todo-list :filter="filter" />
    <!-- This footer should hidden by default and shown when there are todos -->
    <footer v-show="hasTodoItems" class="footer">
      <!-- This should be `0 items left` by default -->
      <span class="todo-count">
        <strong>{{ todoItemLeft }}</strong> item left
      </span>
      <!-- Remove this if you don't implement routing -->
      <ul class="filters">
        <li>
          <NuxtLink to="/" :class="{ selected: isAllFilter }">
            All
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/active" :class="{ selected: isActiveFilter }">
            Active
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/completed" :class="{ selected: isCompletedFilter }">
            Completed
          </NuxtLink>
        </li>
      </ul>
      <!-- Hidden if no completed items are left ↓ -->
      <button
        v-show="hasSomeItemCompleted"
        class="clear-completed"
        @click="clear"
      >
        Clear completed
      </button>
    </footer>
  </section>
</template>

<script>
import CreateTodoItem from './CreateTodoItem'
import TodoList from './TodoList'

export default {
  components: { TodoList, CreateTodoItem },
  props: {
    filter: {
      type: String,
      default: 'all'
    }
  },
  computed: {
    hasTodoItems: function() {
      return this.$store.state.todoItems.all.length > 0
    },
    todoItemLeft: function() {
      const todos = this.$store.state.todoItems.all.filter(
        item => !item.completed
      )
      return todos.length
    },
    hasSomeItemCompleted: function() {
      const todos = this.$store.state.todoItems.all.filter(
        item => item.completed
      )
      return todos.length > 0
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
  methods: {
    clear: function() {
      this.$store.commit('todoItems/clear')
    }
  }
}
</script>
