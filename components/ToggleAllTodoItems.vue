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
      return this.$store.getters['todoItems/itemsLeft'].length === 0
    }
  },
  methods: {
    toggleAll(event) {
      this.$store.dispatch('todoItems/toggleAll', event.target.checked)
    }
  }
}
</script>
