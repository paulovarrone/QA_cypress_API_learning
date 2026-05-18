describe('Testes de API - Automation Exercise', () => {
    
    it('API 1 - Deve retornar lista de todos os produtos', () => {
        cy.getAllProductsList().then((response) => {
            expect(response.status).to.eq(200);   
            const body = JSON.parse(response.body);
            expect(body).to.have.property('products');
            expect(body.products).to.be.an('array');
            expect(body.products[0]).to.have.property('id');
            expect(body.products[0]).to.have.property('name');
            expect(body.products[0]).to.have.property('price');
            expect(body.products[0]).to.have.property('brand');            
            expect(body.products[0]).to.have.property('category');    
            expect(body.products.length).to.be.greaterThan(0);
        });
    });
});