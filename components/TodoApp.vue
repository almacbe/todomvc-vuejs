<template>
  <section class="todoapp">
    <header class="header">
      <h1>todos</h1>
      <create-todo-item />
    </header>

    <todo-list />

    <todo-footer />
  </section>
</template>

<script>
import CreateTodoItem from './CreateTodoItem'
import TodoList from './TodoList'
import TodoFooter from './TodoFooter'

export default {
  components: {
    TodoFooter,
    TodoList,
    CreateTodoItem
  }
}
</script>
