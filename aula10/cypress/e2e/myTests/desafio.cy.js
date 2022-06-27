/// <reference types="Cypress" />

describe('Work with alerts', () => {
    before(() => { //before all tests
        cy.visit('https://www.wcaquino.me/cypress/componentes.html'); // hook
    });

    beforeEach(() => { //before each test
        cy.reload(); // reload page
    });


    it('Validando mensagens', () => {
        const stub = cy.stub().as('alerta');//stub é um mock
        
        cy.on('window:alert', stub);//mock
        
        cy.get('#formCadastrar').click()
        .then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Nome eh obrigatorio');
        });

        cy.get('#formNome').type('Rafael')
        .should('have.value', 'Rafael');

        cy.get('#formCadastrar').click()
        .then(() => {
            expect(stub.getCall(1)).to.be.calledWith('Sobrenome eh obrigatorio');
        });

        cy.get('#formSobrenome').type('Silva')
        .should('have.value', 'Silva');

        cy.get('#formCadastrar').click()
        .then(() => {
            expect(stub.getCall(2)).to.be.calledWith('Sexo eh obrigatorio');
        });

        cy.get('#formSexoMasc').click()
        .should('be.checked');

        cy.get('#formCadastrar').click()
       
        cy.get('#resultado > :nth-child(1)').should('contain', 'Cadastrado');
        


    });
});
