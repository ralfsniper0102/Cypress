/// <reference types="Cypress" />

describe('Work with alerts', () => {
    before(() => { //before all tests
        cy.visit('https://www.wcaquino.me/cypress/componentes.html'); // hook
    });

    it('Going back to the past', () => {
        cy.get('#buttonNow').click();
        cy.get('#resultado > span')
        .should('contain', '27/06/2022');


        const dt = new Date(2022, 5, 27);
        cy.clock(dt.getTime());
        cy.get('#buttonNow').click();
        cy.get('#resultado > span')
        .should('contain', '27/06/2022');

    });

    it.only('Going forward to the future', () => {
        cy.get('#buttonTimePassed').click();
        cy.get('#resultado > span')
    });
});