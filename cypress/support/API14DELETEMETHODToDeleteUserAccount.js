Cypress.Commands.add('deleteUserAccount', () => {
    return cy.fixture('deletarConta').then((dados) => {
        return cy.request({
            method: 'DELETE',
            url: 'https://automationexercise.com/api/deleteAccount',
            form: true,
            body: {
                email: dados.usuario.email,
                password: dados.usuario.password
            }
        });
    });
});