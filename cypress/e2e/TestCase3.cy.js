describe('Testes de API - Automation Exercise', () => {
    
    it('API 3 - pegar toda lista de marcas', () => {
        cy.getAllBrandsList().then((response) => {
            expect(response.status).to.eq(200);   
            const body = JSON.parse(response.body);
            expect(body).to.have.property('brands');
            expect(body.brands).to.be.an('array');
            expect(body.brands[0]).to.have.property('id');
            expect(body.brands[0]).to.have.property('brand');   
            expect(body.brands.length).to.be.greaterThan(0);
            cy.log('Brands List:', JSON.stringify(body.brands, null, 2));
        });
    });
});