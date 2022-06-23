/// <reference types="Cypress" />

describe('Work with basic elements', () => {
    before(()=>{ //before all tests
        cy.visit('https://www.wcaquino.me/cypress/componentes.html'); // hook
    });

    beforeEach(()=>{ //before each test
        cy.reload(); // reload page
    });

    it('Text', () => {
        
        cy.get('body').should('contain', 'Cuidado');
        cy.get('span').should('contain', 'Cuidado');
        cy.get('.facilAchar').should('contain','Cuidado');
        cy.get('.facilAchar').should('have.text','Cuidado onde clica, muitas armadilhas...');
    });

    it('Links',()=>{
        
        cy.get('[href="#"]').click();
        cy.get('#resultado').should('contain','Voltou!');

        cy.reload(); //recarrega a pagina
        cy.get('#resultado').should('have.not.contain','Voltou!');
        cy.contains('Voltar').click();
        cy.get('#resultado').should('contain','Voltou!');
    });
});