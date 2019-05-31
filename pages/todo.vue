<template>
  <div>
    <todo />
    <div class="info">
      <p>Double-click to edit a todo</p>
      <!-- Remove the below line ↓ -->
      <p>Template by <a href="http://sindresorhus.com">Sindre Sorhus</a></p>
      <!-- Change this out with your name and url ↓ -->
      <p>Created by <a href="http://todomvc.com">you</a></p>
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
