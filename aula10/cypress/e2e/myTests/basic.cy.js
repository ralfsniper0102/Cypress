/// <reference types="Cypress" />

describe('Cypress basics', () => {
    it('Should visit a page and assert title', () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')

        cy.title().should('be.equal', 'Campo de Treinamento');//assertion

        cy.title().should('contain', 'Campo');//assertion

        cy.title().should('include', 'Campo');//assertion

        cy.title()
            .should('be.equal', 'Campo de Treinamento').debug()//assertion
            .and('contain', 'Campo');//assertion

            cy.title().then(title=>{ ///pega o titulo da pagina
                console.log(title);
            });

            cy.title().should(title=>{ ///pega o titulo da pagina
                console.log(title);
            });

        
    });

    it('Should find and interact with an element', () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html');
        cy.pause();
        cy.get('#buttonSimple')
        .click()
        .should('have.value', 'Obrigado!'); 


    });

}); 