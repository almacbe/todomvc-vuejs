import { getters } from '@/store/todoItems'
import TodoItemBuilder from './builder/TodoItemBuilder'

describe('Todo Items Store', () => {
  test('returns one items left on a array of two items', () => {
    const item1 = new TodoItemBuilder().build()
    const item2 = new TodoItemBuilder().withCompleted(true).build()
    const todos = [item1, item2]

    const state = {
      all: todos,
    }

    const result = getters.itemsLeft(state)

    expect(result).toHaveLength(1)
    expect(result[0]).toEqual(item1)
  })

  test('returns one items left on a array of two items', () => {
    const item1 = new TodoItemBuilder().build()
    const item2 = new TodoItemBuilder().build()
    const todos = [item1, item2]

    const state = {
      all: todos,
    }

    const result = getters.itemsLeft(state)

    expect(result).toHaveLength(2)
  })

  test('returns one items comppleted on a array of three items', () => {
    const item1 = new TodoItemBuilder().build()
    const item2 = new TodoItemBuilder().build()
    const item3 = new TodoItemBuilder().withCompleted(true).build()
    const todos = [item1, item2, item3]

    const state = {
      all: todos
    }

    const result = getters.itemsCompleted(state)

    expect(result).toHaveLength(1)
    expect(result[0]).toBe(item3)
  })
})
