/// <reference types="Cypress" />

describe('Work with basic elements', () => {
    before(() => { //before all tests
        cy.visit('https://www.wcaquino.me/cypress/componentes.html'); // hook
    });

    beforeEach(() => { //before each test
        cy.reload(); // reload page
    });

    it('Text', () => {

        cy.get('body').should('contain', 'Cuidado');
        cy.get('span').should('contain', 'Cuidado');
        cy.get('.facilAchar').should('contain', 'Cuidado');
        cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...');
    });

    it('Links', () => {

        cy.get('[href="#"]').click();
        cy.get('#resultado').should('contain', 'Voltou!');

        cy.reload(); //recarrega a pagina
        cy.get('#resultado').should('have.not.contain', 'Voltou!');
        cy.contains('Voltar').click();
        cy.get('#resultado').should('contain', 'Voltou!');
    });

    it('TextFields', () => {
        cy.get('#formNome').type('Cypress test'); //escrever no campo
        cy.get('#formNome').should('have.value', 'Cypress test');

        cy.get('#elementosForm\\:sugestoes') // coloca uma barra "\" para dar certo
            .type('Cypress test')
            .should('have.value', 'Cypress test');

        cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input')
            .type('Cypress {selectall} test{backspace}',{delay: 100}) //seleciona tudo e apaga - espera 100ms
            //.should('have.value', 'Cypress tes')
            .clear();

    });

    it('Radio', () => {
        cy.get('#formSexoFem')
        .click()
        .should('be.checked');
        cy.get('#formSexoMasc').should('not.be.checked');

        cy.get('[name="formSexo"]').should('have.length', 2);
    });

    it('Checkbox', () => {
        cy.get('[name=formComidaFavorita]')
        .click({ multiple: true })
        .should('be.checked');
        cy.get('#formComidaCarne').should('be.checked');
    });

    it('Combo', () => {
        cy.get('[data-test="dataEscolaridade"]')
        .select('Superior')
        .should('have.value', 'superior');//verificar value no html

        cy.get('[data-test="dataEscolaridade"]')
        .select('Mestrado')
        .should('have.value', 'mestrado');//verificar value no html

        cy.get('[data-test="dataEscolaridade"] option')
        .should('have.length', 8);
        cy.get('[data-test="dataEscolaridade"] option')
        .then($arr =>{ 
            const values = [];
            $arr.each(function(){//pega todos os valores
                values.push(this.innerHTML);//adiciona no array
            })
            expect(values).to.include.members(['Superior', 'Mestrado', 'Doutorado']);// verificar no jquery
        })

    });

    it.only('Combo Multiplo', () => {
        cy.get('[data-testid="dataEsportes"]')
        .select(['natacao', 'Corrida']);
        cy.get('[data-testid="dataEsportes"]').then($el =>{
            expect($el.val()).to.have.members(['natacao', 'Corrida']);
        });
        
        cy.get('[data-testid="dataEsportes"]').then($el =>{
            expect($el.val()).to.be.deep.equal(['natacao', 'Corrida']);
            expect($el.val()).to.have.length(2);
        });

        cy.get('[data-testid="dataEsportes"]')
        .invoke('val')
        .should('eql', ['natacao', 'Corrida']);

        //TODO Validar as opções do combo multiplo
    })

    

});