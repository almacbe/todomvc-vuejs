<template>
  <div>
    <todo />
    <div class="info">
      <p>Double-click to edit a todo</p>
      <p>Created by <a href="https://alfonsomachado.com">Alfonso Machado</a></p>
      <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
    </div>
  </div>
</template>

<script>
import Todo from '~/components/Todo.vue'

export default {
  components: {
    Todo
  },
  head() {
    return {
      title: 'TodoMVC'
    }
  }
}
</script>
