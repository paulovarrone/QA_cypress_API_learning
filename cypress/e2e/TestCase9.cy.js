describe('Testes de API - Automation Exercise', () => {
    
    it('API 9 - DELETE verificar login', () => {
        cy.deleteVerifyLogin().then((response) => {
            expect(response.status).to.eq(200);
            
            const body = JSON.parse(response.body);
            expect(body.responseCode).to.eq(405);
            expect(body.message).to.eq("This request method is not supported.");
        });
    });
});