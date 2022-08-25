context('Testing card operability', () => {
    it('should redirect when the episode card is clicked', () => {
        cy.visit('http://localhost:3000/episodes')
        cy.get('section').within(() => cy.get('div').first().click())
        cy.url().should('match', /episodes\/(\d)/)
    })
})
