<template>
  <div>
    <todo-app />
  </div>
</template>

<script>
import TodoApp from '~/components/TodoApp.vue'

export default {
  components: {
    TodoApp
  },
  head() {
    return {
      title: 'TodoMVC'
    }
  }
}
</script>
