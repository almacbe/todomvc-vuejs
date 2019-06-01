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
      const item = {
        id: this.uuid(),
        description: event.target.value,
        completed: false
      }

      this.$store.commit('todoItems/addItem', item)

      event.target.value = ''
    },
    uuid: function() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(
        c
      ) {
        const r = (Math.random() * 16) | 0
        const v = c === 'x' ? r : (r & 0x3) | 0x8
        return v.toString(16)
      })
    }
  }
}
</script>
