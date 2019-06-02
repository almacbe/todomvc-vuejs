import {shallowMount, createLocalVue} from '@vue/test-utils'
import Vuex from 'vuex'
import TodoItemLeft from '@/components/TodoItemLeft.vue'
import TodoItemBuilder from '@/test/builder/TodoItemBuilder'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Todo Item left', () => {
  test('show zero items left when there is no todo items', () => {
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
    const wrapper = shallowMount(TodoItemLeft, { store, localVue })
    const text = wrapper.find('.todo-count');

    expect(text.text()).toBe('0 item left')
  })

  test('show 2 items left when there is no todo items', () => {
    const item1 = new TodoItemBuilder().build()
    const item2 = new TodoItemBuilder().build()
    const getters = {
      itemsLeft: () => [item1, item2]
    }
    const store = new Vuex.Store({
      modules: {
        todoItems: {
          namespaced: true,
          getters
        }
      }
    })
    const wrapper = shallowMount(TodoItemLeft, { store, localVue })

    const text = wrapper.find('.todo-count');
    expect(text.text()).toBe('2 item left')
  })
})
