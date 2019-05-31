<template>
  <section class="todoapp">
    <header class="header">
      <h1>todos</h1>
      <input
        class="new-todo"
        placeholder="What needs to be done?"
        autofocus
        @keyup.enter="addItem"
      />
    </header>
    <!-- This section should be hidden by default and shown when there are todos -->
    <section v-show="hasTodoItems" class="main">
      <input
        id="toggle-all"
        class="toggle-all"
        type="checkbox"
        :checked="hasAllItemsCompleted"
        @click="toggleAll"
      />
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        <!-- These are here just to show the structure of the list items -->
        <!-- List items should get the class `editing` when editing and `completed` when marked as completed -->
        <todo-item
          v-for="item in items"
          :key="item.id"
          :item="item"
        ></todo-item>
      </ul>
    </section>
    <!-- This footer should hidden by default and shown when there are todos -->
    <footer v-show="hasTodoItems" class="footer">
      <!-- This should be `0 items left` by default -->
      <span class="todo-count">
        <strong>{{ todoItemLeft }}</strong> item left
      </span>
      <!-- Remove this if you don't implement routing -->
      <ul class="filters">
        <li>
          <a class="selected" href="#/">All</a>
        </li>
        <li>
          <a href="#/active">Active</a>
        </li>
        <li>
          <a href="#/completed">Completed</a>
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
import TodoItem from './TodoItem'

export default {
  components: { TodoItem },
  computed: {
    items: function() {
      return this.$store.state.todoItems.all
    },
    hasTodoItems: function() {
      return this.$store.state.todoItems.all.length > 0
    },
    todoItemLeft: function() {
      const todos = this.$store.state.todoItems.all.filter(
        item => !item.completed
      )
      return todos.length
    },
    hasAllItemsCompleted: function() {
      const todos = this.$store.state.todoItems.all.filter(
        item => !item.completed
      )
      return todos.length === 0
    },
    hasSomeItemCompleted: function() {
      const todos = this.$store.state.todoItems.all.filter(
        item => item.completed
      )
      return todos.length > 0
    }
  },
  methods: {
    addItem: function(event) {
      const item = {
        id: this.uuid(),
        description: event.target.value,
        completed: false
      }

      this.$store.commit('todoItems/addItem', item)

      event.target.value = ''
    },
    toggleAll: function(event) {
      this.$store.commit('todoItems/toggleAll', event.target.checked)
    },
    clear: function() {
      this.$store.commit('todoItems/clear')
    },
    uuid: function() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(
        c
      ) {
        const r = (Math.random() * 16) | 0
        const v = c === 'x' ? r : (r & 0x3) | 0x8
        return v.toString(16)
      })
    }
  }
}
</script>
