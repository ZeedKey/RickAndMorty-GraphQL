context('Testing redirections', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it("should redirect to the episodes page when URL is '/'", () => {
        cy.url().should('include', '/episodes')
    })

    it("should redirect to the episodes page when the episode's ID is a string", () => {
        cy.visit('http://localhost:3000/episodes/text')
        cy.url().should('include', '/episodes')
    })
})
