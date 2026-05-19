describe('Testes de API - Automation Exercise', () => {
    
    it('API 14 - GET detalhes da conta de usuário por email', () => {
        cy.getUserByEmail().then((response) => {
            expect(response.status).to.eq(200);   
            
            const body = JSON.parse(response.body);
            expect(body.responseCode).to.eq(200);
            cy.log('User Detail:', JSON.stringify(body.user, null, 2));
        });
    });
});