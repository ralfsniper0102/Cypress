/// <reference types="Cypress" />

const { should } = require("chai");

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

    it('find', () => {
        cy.get('#buttonList').click()
        cy.get('#lista >')
        .find('span')
        .should('contain', 'Item 1')
        // cy.get('#lista >')
        // .find('span')
        cy.get('#lista li span') //utilizar quando não encontra com find
        .should('contain', 'Item 2')
    });

    it('DOM', () => {
        cy.get('#buttonListDOM').click();
        cy.get('#lista > :nth-child(1) > span')
        .should('contain', 'Item 1')
        cy.get('#lista > :nth-child(2) > span')
        .should('contain', 'Item 2')
    });

    it('Uso do Timeout', () => {
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo', {timeout:3000}).should('exist');//timeout 3s



    
        
        cy.get('#buttonList').click()
        cy.get('#lista >')
        .find('span')
        .should('contain', 'Item 1')

        cy.wait(4000) //espera 4s

        cy.get('#lista >')//
        .find('span')
        .should('contain', 'Item 2')


        cy.title().then(title=>{
            console.log(title);
        });
    });

    it('Uso do Timeout 2', () => {

        cy.title().then(title=>{ ///pega o titulo da pagina
            console.log(title);
        });
    });

    it.only('Should vs Then', () => {

        cy.get('#buttonListDOM').click();
        cy.get('#lista li span').then($el=>{
            //.should('have.lenght', 1);
            expect($el).to.have.length(1)
            //console.log($el);

            //return 2
            //should - fica executando - retrycess
            //then - executa após receber o resultado

        })
        .and('not.have.id', 'buttonListDOM')
    });
});