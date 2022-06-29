/// <reference types="Cypress" />

describe('Work with alerts', () => {
    before(() => { //before all tests
        cy.visit('https://barrigareact.wcaquino.me/');

        cy.get('[data-test="email"]').type('ralfsniper0102@gmail.com');
        cy.get('[data-test="passwd"]').type('123456');

        cy.get('.btn').click();

        cy.get('.toast-message').should('exist');
        cy.get('.toast-message').should('contain', 'Bem vindo, Rafael Araújo da Silva!');

    });

    it('cadastro', () => {
        cy.visit('https://barrigareact.wcaquino.me');

        cy.get(':nth-child(2) > .nav-link').click();

        cy.get('.jumbotron > :nth-child(1) > .form-control').type('Rafael Araújo da Silva');

        cy.get('.input-group > .form-control').type('ralfsniper0102@gmail.com');

        cy.get(':nth-child(3) > .form-control').type('123456');

        cy.get('.btn').click();
    });

    it.only('criar conta', () => {
        cy.get('[data-test="menu-settings"]').click();
        
        cy.get('[href="/contas"]').click();

        cy.get('[data-test="nome"]').type('Conta Teste');
        cy.get('.btn').click();
        cy.get('.toast-message').should('exist');
    });
});

