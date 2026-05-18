describe('Testes de API - Automation Exercise', () => {
    
    it('API 5 - POST busca produto', () => {
        cy.searchProductSemParametro().then((response) => {
            expect(response.status).to.eq(200);
            
            const body = JSON.parse(response.body);
            expect(body.responseCode).to.eq(400);
            expect(body.message).to.eq("Bad request, search_product parameter is missing in POST request.");
        });
    });
});