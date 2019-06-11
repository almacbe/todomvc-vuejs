import uuidGenerator from '@/helpers/uuid_generator'

export const state = () => ({
  all: []
})

export const mutations = {
  addItem: function(state, item) {
    state.all.push(item)
  },

  ADD_ITEM: function(state, item) {
    state.all.push(item)
  },

  removeItem: function(state, item) {
    state.all.splice(state.all.indexOf(item), 1)
  },

  TOGGLE: function(state, item) {
    item.completed = !item.completed
  },

  TOGGLE_ALL(state, value) {
    state.all.map(item => (item.completed = value))
  },

  clear: function(state) {
    state.all = state.all.filter(item => item.completed === false)
  },
  CLEAR_COMPLETED: function(state) {
    state.all = state.all.filter(item => item.completed === false)
  },

  edit: function(state, { item, description }) {
    item.description = description
  }
}

export const actions = {
  toggle: function(context, item) {
    context.commit('TOGGLE', item)
  },
  clearCompletedItems: function(context) {
    context.commit('CLEAR_COMPLETED')
  },
  toggleAll({ commit }, checked) {
    commit('TOGGLE_ALL', checked)
  },
  createItem: function({ commit }, description) {
    const item = {
      id: uuidGenerator(),
      description: description,
      completed: false
    }
    commit('ADD_ITEM', item)
  }
}

export const getters = {
  list: function(state) {
    return state.all
  },
  itemsLeft: function(state) {
    return state.all.filter(item => !item.completed)
  },
  itemsCompleted(state) {
    return state.all.filter(item => item.completed)
  }
}
