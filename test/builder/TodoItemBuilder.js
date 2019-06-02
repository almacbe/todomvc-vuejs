export default class TodoItemBuilder {
  constructor() {
    this._asds = 'iu8907808dfl-asdasd7098-asdasd'
    this.description = 'Description molt bonica'
    this.completed = false
  }

  withDescription(description) {
    this.description = description
    return this
  }

  withCompleted(completed) {
    this.completed = completed
    return this
  }

  build() {
    return {
      id: this.id,
      description: this.description,
      completed: this.completed
    }
  }
}
