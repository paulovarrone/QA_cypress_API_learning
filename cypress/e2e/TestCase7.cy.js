describe('Testes de API - Automation Exercise', () => {
    
    it('API 7 - POST verificar login com detalhes válidos', () => {
        cy.verifyLoginWithValidDetails().then((response) => {
            expect(response.status).to.eq(200);
            
            const body = JSON.parse(response.body);
            expect(body.responseCode).to.eq(200);
            expect(body.message).to.eq("User exists!");
        });
    });
});