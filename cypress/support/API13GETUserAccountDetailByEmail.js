Cypress.Commands.add('getUserByEmail', () => {
    return cy.fixture('criarConta').then((dados) => {
        return cy.request({
            method: 'GET',
            url: 'https://automationexercise.com/api/getUserDetailByEmail',
            form: true,
            qs: {
                email: dados.getUser.email,
            }
        });
    });
});