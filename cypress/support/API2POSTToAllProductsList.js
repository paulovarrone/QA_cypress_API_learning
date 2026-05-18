Cypress.Commands.add('POSTAllProductsList', () => {
    return cy.request({
        method: 'POST',
        url: 'https://automationexercise.com/api/productsList',
        failOnStatusCode: false
    });
});