Cypress.Commands.add('searchProduct', () => {
    return cy.fixture('produto').then((dados) => {
        return cy.request({
            method: 'POST',
            url: 'https://automationexercise.com/api/searchProduct',
            form: true,
            body: {
                search_product: dados.produtos.categoria
            }
        });
    });
});