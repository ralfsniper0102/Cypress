/// <reference types="Cypress" />

describe('Cypress basics', () => {
    it.only('Should visit a page and assert title', () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')

        cy.title().should('be.equal', 'Campo de Treinamento');//assertion

        cy.title().should('contain', 'Campo');//assertion

        cy.title().should('include', 'Campo');//assertion

        cy.title()
            .should('be.equal', 'Campo de Treinamento').debug()//assertion
            .and('contain', 'Campo');//assertion

            let syncTitle

            cy.title().then(title=>{ ///pega o titulo da pagina
                console.log(title);
                cy.get('#formNome').type('Funciona?');
                syncTitle = title;
            });

            cy.get('[data-cy="dataSobrenome"]').then($el=>{
                $el.val(syncTitle);
            });

            cy.get('#elementosForm\\:sugestoes').then($el=>{
                cy.wrap($el).type('Funciona?');  
            })
           
                

            cy.title().should(title=>{ ///pega o titulo da pagina
                console.log(title);
               // cy.get('#formNome').type('Funciona?2'); //não funciona
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