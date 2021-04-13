describe('Todo List', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('shows a Heading on the page', () => {
        cy.contains('Yet Another Todo List!')
    })

    it('shows the input bar', () => {
        cy.get("#todo-input").within(() => {
            cy.get("#input-bar").should("have.attr", "placeholder", "Todo's...")
        })
    })

    it('shows the todo item on the page after clicking the save button', () => {
        cy.get("#input-bar").type("Do the food shop")
        cy.get("#save-button").click()
        cy.contains("Do the food shop")
    })
})