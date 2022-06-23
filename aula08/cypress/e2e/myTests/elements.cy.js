/// <reference types="Cypress" />

describe('Work with basic elements', () => {
    it('Text', () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html');
        cy.get('body').should('contain', 'Cuidado');
        cy.get('span').should('contain', 'Cuidado');
        cy.get('.facilAchar').should('contain','Cuidado');
        cy.get('.facilAchar').should('have.text','Cuidado onde clica, muitas armadilhas...');
    });

    it('Links',()=>{
        cy.visit('https://www.wcaquino.me/cypress/componentes.html');
        cy.get('[href="#"]').click();
        cy.get('#resultado').should('contain','Voltou!');

        cy.reload(); //recarrega a pagina
        cy.get('#resultado').should('have.not.contain','Voltou!');
        cy.contains('Voltar').click();
        cy.get('#resultado').should('contain','Voltou!');
    });
});