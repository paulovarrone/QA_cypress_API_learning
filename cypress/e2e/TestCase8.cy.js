describe('Testes de API - Automation Exercise', () => {
    
    it('API 8 - POST verificar login sem parâmetro de email', () => {
        cy.verifyLoginWithoutEmailParameter().then((response) => {
            expect(response.status).to.eq(200);
            
            const body = JSON.parse(response.body);
            expect(body.responseCode).to.eq(400);
            expect(body.message).to.eq("Bad request, email or password parameter is missing in POST request.");
        });
    });
});