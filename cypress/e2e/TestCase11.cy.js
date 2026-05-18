describe('Testes de API - Automation Exercise', () => {
    
    it('API 11 - POST criar conta de usuário', () => {
        cy.createUserAccount().then((response) => {
            cy.log('Response:', response.body);
            expect(response.status).to.eq(200);
            
            const body = JSON.parse(response.body);
            expect(body.responseCode).to.eq(201);
            expect(body.message).to.eq("User created!");
        });
    });
});