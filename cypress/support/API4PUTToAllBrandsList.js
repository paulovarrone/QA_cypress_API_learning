Cypress.Commands.add('putAllBrandsList', () => {
    return cy.request({
        method: 'PUT',
        url: 'https://automationexercise.com/api/brandsList',
        failOnStatusCode: false
    })
});