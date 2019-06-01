<template>
  <div>
    <todo />
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
