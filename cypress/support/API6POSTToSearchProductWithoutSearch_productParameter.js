Cypress.Commands.add('searchProductSemParametro', () => {
    return cy.fixture('produto').then((dados) => {
        return cy.request({
            method: 'POST',
            url: 'https://automationexercise.com/api/searchProduct',
            form: true,
            body: {
                
            }
        });
    });
});