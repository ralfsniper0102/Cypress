/// <reference types="Cypress" />

describe('Cypress basics', () => {
    it('Should visit a page and assert title', () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')

        cy.title().should('be.equal', 'Campo de Treinamento');//assertion

        cy.title().should('contain', 'Campo');//assertion

        cy.title().should('include', 'Campo');//assertion

        cy.title()
            .should('be.equal', 'Campo de Treinamento')//assertion
            .and('contain', 'Campo');//assertion

        // cy.title().should('be.equal','Campo de ');//assertion

        
    });

    it('Should find and interact with an element', () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html');
        cy.get('#buttonSimple')
        .click()
        .should('have.value', 'Obrigado!'); 


    });

}); 