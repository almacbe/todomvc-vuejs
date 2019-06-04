import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import ToggleAllTodoItems from '../components/ToggleAllTodoItems'
import TodoItemBuilder from './builder/TodoItemBuilder'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Toggle All Todo Items Component', () => {
  test('Unchecked if there are one item undone', () => {
    const item1 = new TodoItemBuilder().build()
    const getters = {
      itemsLeft: () => [item1]
    }
    const store = new Vuex.Store({
      modules: {
        todoItems: {
          namespaced: true,
          getters
        }
      }
    })

    const wrapper = shallowMount(ToggleAllTodoItems, { store, localVue })
    const input = wrapper.find('input')

    expect(input.element.checked).toBe(false)
  })

  test('Checked if there is a completed item', () => {
    const getters = {
      itemsLeft: () => []
    }
    const store = new Vuex.Store({
      modules: {
        todoItems: {
          namespaced: true,
          getters
        }
      }
    })

    const wrapper = shallowMount(ToggleAllTodoItems, { store, localVue })
    const input = wrapper.find('input')

    expect(input.element.checked).toBe(true)
  })

  test('Click Mark All Todo Items Completed dispatch toogle all action', () => {
    const getters = {
      itemsLeft: () => []
    }
    const actions = {
      toggleAll: jest.fn()
    }
    const store = new Vuex.Store({
      modules: {
        todoItems: {
          namespaced: true,
          actions,
          getters
        }
      }
    })
    const wrapper = shallowMount(ToggleAllTodoItems, { store, localVue })
    const input = wrapper.find('input')

    input.trigger('click')

    expect(input.element.checked).toBe(false)
    expect(actions.toggleAll).toHaveBeenCalled()
  })
})
