import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import TodoItemBuilder from '@/test/builder/TodoItemBuilder'
import TodoList from '@/components/TodoList'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Todo List Component', () => {
  test('Hidden if there are no items', () => {
    const $route = {
      params: {
        filter: 'All'
      }
    }
    const getters = {
      list: () => []
    }
    const store = new Vuex.Store({
      modules: {
        todoItems: {
          namespaced: true,
          getters
        }
      }
    })

    const wrapper = shallowMount(TodoList, {
      store,
      localVue,
      mocks: { $route }
    })

    const button = wrapper.find('section.main');
    expect(button.isVisible()).toBe(false)
    const items = wrapper.find('ul')
    expect(items.isEmpty()).toBe(true)
  })

  test('Show item', () => {
    const $route = {
      params: {
        filter: 'All'
      }
    }
    const item1 = new TodoItemBuilder().build()
    const getters = {
      list: () => [item1]
    }
    const store = new Vuex.Store({
      modules: {
        todoItems: {
          namespaced: true,
          getters
        }
      }
    })
    const wrapper = shallowMount(TodoList, {
      store,
      localVue,
      mocks: { $route }
    })

    const item = wrapper.find('todo-item-stub')
    expect(item.isVueInstance()).toBe(true)
  })
})
