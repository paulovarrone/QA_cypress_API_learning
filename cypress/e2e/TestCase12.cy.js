describe('Testes de API - Automation Exercise', () => {
    
    it('API 12 - DELETE deletar conta de usuário', () => {
        cy.deleteUserAccount().then((response) => {
            cy.log('Response:', response.body);
            expect(response.status).to.eq(200);
            
            const body = JSON.parse(response.body);
            expect(body.responseCode).to.eq(200);
            expect(body.message).to.eq("Account deleted!");
        });
    });
});