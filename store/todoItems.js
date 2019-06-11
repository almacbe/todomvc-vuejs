import uuidGenerator from '@/helpers/uuid_generator'

export const state = () => ({
  all: []
})

export const mutations = {
  ADD_ITEM(state, item) {
    state.all.push(item)
  },
  removeItem(state, item) {
    state.all.splice(state.all.indexOf(item), 1)
  },
  TOGGLE(state, item) {
    item.completed = !item.completed
  },
  TOGGLE_ALL(state, value) {
    state.all.map(item => (item.completed = value))
  },
  CLEAR_COMPLETED(state) {
    state.all = state.all.filter(item => item.completed === false)
  },
  EDIT_ITEM(state, { id, description }) {
    const item = state.all.find(item => item.id === id)
    item.description = description
  }
}

export const actions = {
  toggle({ commit }, item) {
    commit('TOGGLE', item)
  },
  clearCompletedItems({ commit }) {
    commit('CLEAR_COMPLETED')
  },
  toggleAll({ commit }, checked) {
    commit('TOGGLE_ALL', checked)
  },
  createItem({ commit }, description) {
    const item = {
      id: uuidGenerator(),
      description: description,
      completed: false
    }
    commit('ADD_ITEM', item)
  },
  editItem({ commit }, params) {
    commit('EDIT_ITEM', params)
  }
}

export const getters = {
  list(state) {
    return state.all
  },
  itemsLeft(state) {
    return state.all.filter(item => !item.completed)
  },
  itemsCompleted(state) {
    return state.all.filter(item => item.completed)
  }
}
