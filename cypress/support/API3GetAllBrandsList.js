Cypress.Commands.add('getAllBrandsList', () => {
    return cy.request({
        method: 'GET',
        url: 'https://automationexercise.com/api/brandsList',
    }).then((response) => {
        expect(response.status).to.eq(200);
        return response; 
    });
});