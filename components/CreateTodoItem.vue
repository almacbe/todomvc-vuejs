<template>
  <input
    class="new-todo"
    placeholder="What needs to be done?"
    autofocus
    @keyup.enter="addItem"
  />
</template>

<script>
export default {
  methods: {
    addItem: function(event) {
      this.$store.dispatch('todoItems/createItem', event.target.value)

      event.target.value = ''
    }
  }
}
</script>
