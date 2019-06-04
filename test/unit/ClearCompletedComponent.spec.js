import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import ClearCompleted from '@/components/ClearCompleted'
import TodoItemBuilder from '@/test/builder/TodoItemBuilder'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Clear Completed Component', () => {
  test('Hidden if no completed items are left', () => {
    const getters = {
      itemsCompleted: () => []
    }
    const store = new Vuex.Store({
      modules: {
        todoItems: {
          namespaced: true,
          getters
        }
      }
    })

    const wrapper = shallowMount(ClearCompleted, { store, localVue })

    const button = wrapper.find('.clear-completed');
    expect(button.isVisible()).toBe(false)
  })

  test('Show button if there is a completed item', () => {
    const item1 = new TodoItemBuilder().withCompleted(true).build()
    const getters = {
      itemsCompleted: () => [item1]
    }
    const store = new Vuex.Store({
      modules: {
        todoItems: {
          namespaced: true,
          getters
        }
      }
    })

    const wrapper = shallowMount(ClearCompleted, { store, localVue })

    const button = wrapper.find('.clear-completed');
    expect(button.isVisible()).toBe(true)
  })

  test('Click button dispatch clear completed items action', () => {
    const item1 = new TodoItemBuilder().withCompleted(true).build()
    const getters = {
      itemsCompleted: () => [item1]
    }
    const actions = {
      clearCompletedItems: jest.fn()
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
    const wrapper = shallowMount(ClearCompleted, { store, localVue })
    const button = wrapper.find('.clear-completed');

    button.trigger('click')

    expect(button.isVisible()).toBe(true)
    expect(actions.clearCompletedItems).toHaveBeenCalled()
  })
})
