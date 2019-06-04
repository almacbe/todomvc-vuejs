context('TODO MVC App', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('add a todo item', () => {
    // https://on.cypress.io/focus
    cy.get('.header input')
      .type('Todo bonico')
      .type('{enter}', { force: true })

    cy.get('.todo-list label')
      .should('have.text', 'Todo bonico')
  })
})
