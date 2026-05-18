describe('Testes de API - Automation Exercise', () => {
    
    it('API 5 - POST busca produto', () => {
        cy.searchProduct().then((response) => {
            expect(response.status).to.eq(200);
            
            const body = JSON.parse(response.body);
            expect(body.responseCode).to.eq(200);
            expect(body.products).to.be.an('array');
            expect(body.products).to.have.length.greaterThan(0);
        });
    });
});