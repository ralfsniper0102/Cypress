/// <reference types="Cypress" />

describe('Work with alerts', () => {
    before(() => { //before all tests
        cy.visit('https://www.wcaquino.me/cypress/componentes.html'); // hook
    });

    beforeEach(() => { //before each test
        cy.reload(); // reload page
    });

    const food = ['Carne', 'Frango', 'Pizza', 'Vegetariana'];

    it('Dinamic', () => {

        cy.get('#formNome').type('Rafael');
        cy.get('#formSobrenome').type('Silva');
        cy.get('#formSexoMasc').click();
        
        //foreach loop
        food.forEach(food => {
            cy.get(`#formComida${food}`).click();
        });

        // cy.get('#formComidaFavorita').click({multiple: true});//multiple selects

        
        
    })
});