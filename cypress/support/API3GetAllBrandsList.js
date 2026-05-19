Cypress.Commands.add('getAllBrandsList', () => {
    return cy.request({
        method: 'GET',
        url: 'https://automationexercise.com/api/brandsList',
        qs: {
                brandsList: 'brandsList',
            }
    })
});