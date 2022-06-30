/// <reference types="Cypress" />

import loc from '../../../support/locators'; // Importa o arquivo de locators


describe('Work with alerts', () => {
    before(() => { //before all tests
       

        cy.visit(loc.SITE_BARRIGA.LINK); 
        cy.login('ralfsniper0102@gmail.com', '123456');
        cy.get(loc.TOAST.MSG).should('exist');
        cy.resetar();

    });

    it('cadastro', () => {
        cy.visit(loc.SITE_BARRIGA.LINK); 

        cy.get(loc.REGISTER.OPEN_REGISTER).click();

        cy.get(loc.REGISTER.NOME).type('Rafael Araújo da Silva');

        cy.get(loc.REGISTER.EMAIL).type('ralfsniper0102@gmail.com');

        cy.get(loc.REGISTER.SENHA).type('123456');

        cy.get(loc.REGISTER.BTN_REGISTRAR).click();
    });

    it.only('criar conta', () => {
        
        cy.criarConta('Conta Teste1');
    });
});

