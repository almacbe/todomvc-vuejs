<template>
  <div>
    <input
      id="toggle-all"
      class="toggle-all"
      type="checkbox"
      :checked="hasAllItemsCompleted"
      @click="toggleAll"
    />
    <label for="toggle-all">Mark all as complete</label>
  </div>
</template>

<script>
export default {
  computed: {
    hasAllItemsCompleted: function() {
      const todos = this.$store.getters['todoItems/list'].filter(
        item => !item.completed
      )
      return todos.length === 0
    }
  },
  methods: {
    toggleAll: function(event) {
      this.$store.commit('todoItems/toggleAll', event.target.checked)
    }
  }
}
</script>
