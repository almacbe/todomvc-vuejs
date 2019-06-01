<template>
  <div>
    <todo :filter="filter" />
  </div>
</template>

<script>
import Todo from '~/components/TodoApp.vue'

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
  },
  created() {
    this.filter = this.$route.params.filter
  }
}
</script>
