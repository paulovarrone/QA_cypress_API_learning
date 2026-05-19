Cypress.Commands.add('getAllProductsList', () => {
    return cy.request({
        method: 'GET',
        url: 'https://automationexercise.com/api/productsList',
        qs: {
                productsList: 'productsList',
            }
    });
});