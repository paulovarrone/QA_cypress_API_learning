describe('Testes de API - Automation Exercise', () => {
    
    it('API 10 - POST verificar login com detalhes inválidos', () => {
        cy.verifyLoginWithInvalidDetails().then((response) => {
            expect(response.status).to.eq(200);
            
            const body = JSON.parse(response.body);
            expect(body.responseCode).to.eq(404);
            expect(body.message).to.eq("User not found!");
        });
    });
});