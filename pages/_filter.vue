<template>
  <div>
    <todo :filter="$route.params.filter" />
  </div>
</template>

<script>
import Todo from '~/components/Todo.vue'

export default {
  components: { Todo },
  validate({ params }) {
    const placeholder = ['all', 'active', 'completed'].indexOf(params.filter)
    return placeholder > -1
  },
  head() {
    return {
      title: 'TodoMVC'
    }
  }
}
</script>
