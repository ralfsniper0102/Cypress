/// <reference types="Cypress" />

describe('Work with iframe', () => {
    before(() => { //before all tests
        cy.visit('https://www.wcaquino.me/cypress/componentes.html'); // hook
    });

    beforeEach(() => { //before each test
        cy.reload(); // reload page
    });

    it('Iframe', () => {
        cy.get('#frame1').then(iframe=>{
            const body = iframe.contents().find('body');
            cy.wrap(body).find('#tfield')
            .type('Rafael')
            .should('have.value', 'Rafael');

        });
        
    });

    it.only('Iframe 2', () => {
        cy.visit('https://www.wcaquino.me/cypress/frame.html');

        const stub = cy.stub().as('alerta');//stub é um mock

        cy.on('window:alert', stub);//mock

        cy.get('#otherButton').click()       
        .then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Click OK!');
        });      

        cy.get('#tfield').type('Rafael');
        cy.get('#otherButton').click()
        .then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Click OK!');
        });  
        
       // cy.get('#formCadastrar').click()
        


    });
});