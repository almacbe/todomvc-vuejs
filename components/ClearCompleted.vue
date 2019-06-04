<template>
  <!-- Hidden if no completed items are left ↓ -->
  <button v-show="hasSomeItemCompleted" class="clear-completed" @click="clear">
    Clear completed
  </button>
</template>
<script>
export default {
  computed: {
    hasSomeItemCompleted: function() {
      return this.$store.getters['todoItems/itemsCompleted'].length > 0
    }
  },
  methods: {
    clear: function() {
      this.$store.dispatch('todoItems/clearCompletedItems')
    }
  }
}
</script>
