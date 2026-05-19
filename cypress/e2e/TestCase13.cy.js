describe('Testes de API - Automation Exercise', () => {
    
    it('API 13 - PUT atualizar conta de usuário', () => {
        cy.updateUserAccount().then((response) => {
            cy.log('Response:', response.body);
            expect(response.status).to.eq(200);
            
            const body = JSON.parse(response.body);
            expect(body.responseCode).to.eq(200);
            expect(body.message).to.eq("User updated!");
        });
    });
});