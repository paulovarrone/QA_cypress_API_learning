describe('Testes de API - Automation Exercise', () => {
    
    it('API 4 - PUT para todos os produtos (deve retornar 405)', () => {
        cy.putAllBrandsList().then((response) => {

            const body = JSON.parse(response.body);
            
            expect(body.responseCode).to.eq(405);
            expect(body.message).to.eq('This request method is not supported.');
        });
    });
});