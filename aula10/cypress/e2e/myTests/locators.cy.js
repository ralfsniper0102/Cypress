/// <reference types="Cypress" />

describe('Work with basic elements', () => {
    before(() => { //before all tests
        cy.visit('https://www.wcaquino.me/cypress/componentes.html'); // hook
    });

    beforeEach(() => { //before each test
        cy.reload(); // reload page
    });

    it('using xpath', () => {
        cy.xpath('//input')
    });
});