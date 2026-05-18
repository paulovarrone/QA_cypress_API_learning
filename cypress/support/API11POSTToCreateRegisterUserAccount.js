Cypress.Commands.add('createUserAccount', () => {
    return cy.fixture('criarConta').then((dados) => {
        return cy.request({
            method: 'POST',
            url: 'https://automationexercise.com/api/createAccount',
            form: true,
            body: {
                name: dados.usuario.name,
                email: dados.usuario.email,
                password: dados.usuario.password,
                title: dados.usuario.title,
                birth_date: dados.usuario.birth_date,
                birth_month: dados.usuario.birth_month,
                birth_year: dados.usuario.birth_year,
                firstname: dados.usuario.firstname,
                lastname: dados.usuario.lastname,
                company: dados.usuario.company,
                address1: dados.usuario.address1,
                address2: dados.usuario.address2,
                country: dados.usuario.country,
                zipcode: dados.usuario.zipcode,
                state: dados.usuario.state,
                city: dados.usuario.city,
                mobile_number: dados.usuario.mobile_number
            }
        });
    });
});