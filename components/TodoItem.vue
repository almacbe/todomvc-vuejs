<template>
  <li :class="{ completed: item.completed, editing: editing }">
    <div v-show="!editing" :class="{ view: !editing }">
      <input
        class="toggle"
        type="checkbox"
        :checked="item.completed"
        @click="toggle"
      />
      <label @dblclick="edit">{{ item.description }}</label>
      <button class="destroy" @click="remove"></button>
    </div>
    <input class="edit" :value="item.description" @keyup.enter="editItem" />
  </li>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data: function() {
    return {
      editingItem: false
    }
  },
  computed: {
    editing: function() {
      return this.editingItem
    }
  },
  methods: {
    remove: function(event) {
      this.$store.commit('todoItems/removeItem', this.item)
    },
    toggle: function(event) {
      this.$store.commit('todoItems/toggle', this.item)
    },
    edit: function(event) {
      this.editingItem = !this.editingItem
    },
    editItem: function(event) {
      debugger
      const description = event.target.value
      this.$store.commit('todoItems/edit', {
        item: this.item,
        description: description
      })

      this.edit()
    }
  }
}
</script>
