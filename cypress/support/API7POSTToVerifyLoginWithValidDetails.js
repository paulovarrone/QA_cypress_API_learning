Cypress.Commands.add('verifyLoginWithValidDetails', () => {
    return cy.fixture('login').then((dados) => {
        return cy.request({
            method: 'POST',
            url: 'https://automationexercise.com/api/verifyLogin',
            form: true,
            body: {
                email: dados.loginValido.email,
                password: dados.loginValido.password
            }
        });
    });
});