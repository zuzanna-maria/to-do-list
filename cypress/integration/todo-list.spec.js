describe('Todo List', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('shows a Heading on the page', () => {
        cy.contains('Yet Another Todo List!')
    })

    it('shows the input bar', () => {
        cy.get("#input-bar").should("have.attr", "placeholder", "Todo's...")
    })

    it('shows the todo item on the page after clicking the save button', () => {
        cy.get("#input-bar").type("Do the food shop")
        cy.get("#save-button").click()
        cy.contains("Do the food shop")
    })

    it('shows a strikethrough when a checkbox is clicked', () => {
      cy.get("#input-bar").type("Eat food")
      cy.get("#save-button").click()
      cy.get("#todo-0-text").should('have.css', 'text-decoration', 'none solid rgb(255, 255, 255)')
      cy.get("#todo-0-checkbox").click()
      cy.get("#todo-0-text").should('have.css', 'text-decoration', 'line-through solid rgb(255, 255, 255)')

    })

    it("clears list when link is clicked", () => {
      cy.get("#input-bar").type("Eat food")
      cy.get("#save-button").click()
      cy.get("#clear-link").click()
      cy.get("#todo-0-text").should("not.exist")
    })
})
