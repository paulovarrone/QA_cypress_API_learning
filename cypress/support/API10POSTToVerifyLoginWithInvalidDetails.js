Cypress.Commands.add('verifyLoginWithInvalidDetails', () => {
    return cy.fixture('login').then((dados) => {
        return cy.request({
            method: 'POST',
            url: 'https://automationexercise.com/api/verifyLogin',
            form: true,
            body: {
                email: dados.loginInvalido.email,
                password: dados.loginInvalido.password
            }
        });
    });
});