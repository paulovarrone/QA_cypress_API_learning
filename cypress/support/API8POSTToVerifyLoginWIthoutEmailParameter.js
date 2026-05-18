Cypress.Commands.add('verifyLoginWithoutEmailParameter', () => {
    return cy.fixture('login').then((dados) => {
        return cy.request({
            method: 'POST',
            url: 'https://automationexercise.com/api/verifyLogin',
            form: true,
            body: {
                password: dados.loginValido.password
            }
        });
    });
});