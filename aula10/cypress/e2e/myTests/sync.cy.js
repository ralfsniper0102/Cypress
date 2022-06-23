/// <reference types="Cypress" />

describe('Esperas...', () => {
    before(() => { //before all tests
        cy.visit('https://www.wcaquino.me/cypress/componentes.html'); // hook
    });
    beforeEach(() => { //before each test
        cy.reload(); // reload page
    });

    it('Deve aguardar elemento estar disponível', () => {
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('exist')
        .type('Teste')
        .should('have.value', 'Teste')
    });

    it('Deve fazer Retrys', () => {
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('exist')
        .type('Teste')
        .should('have.value', 'Teste')
    });

    it.only('find', () => {
        cy.get('#buttonList').click()
        cy.get('#lista >')
        .find('span')
        .should('contain', 'Item 1');
        cy.get('#lista > ')
        .find('span')
        .should('contain', 'item 2')
    });
});