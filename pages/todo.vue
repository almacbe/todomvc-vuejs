<template>
  <div>
    <todo />
  </div>
</template>

<script>
import Todo from '~/components/Todo.vue'

export default {
  layout: 'todoBase',
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
