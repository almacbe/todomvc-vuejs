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
    console.log(state, item)
  }
}
