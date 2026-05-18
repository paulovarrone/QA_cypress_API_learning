describe('Testes de API - Automation Exercise', () => {
    
    it('API 2 - POST para todos os produtos (deve retornar 405)', () => {
        cy.POSTAllProductsList().then((response) => {

            const body = JSON.parse(response.body);
            
            expect(body.responseCode).to.eq(405);
            expect(body.message).to.eq('This request method is not supported.');
        });
    });
});