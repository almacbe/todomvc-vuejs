export const state = () => ({
  all: []
})

export const mutations = {
  addItem: function(state, item) {
    state.all.push(item)
  },

  removeItem: function(state, item) {
    state.all.splice(state.all.indexOf(item), 1)
  },

  toggle: function(state, item) {
    item.completed = !item.completed
  },

  toggleAll: function(state, value) {
    state.all.map(item => (item.completed = value))
  },

  clear: function(state) {
    state.all = state.all.filter(item => item.completed === false)
  },

  edit: function(state, { item, description }) {
    item.description = description
  }
}
