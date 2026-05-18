Cypress.Commands.add('deleteVerifyLogin', () => {
    return cy.fixture('login').then((dados) => {
        return cy.request({
            method: 'DELETE',
            url: 'https://automationexercise.com/api/verifyLogin',
            form: true,
            body: {
                password: dados.loginValido.password,
                email: dados.loginValido.email
            }
        });
    });
});