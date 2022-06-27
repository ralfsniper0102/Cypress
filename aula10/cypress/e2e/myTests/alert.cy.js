/// <reference types="Cypress" />

describe('Work with alerts', () => {
    before(() => { //before all tests
        cy.visit('https://www.wcaquino.me/cypress/componentes.html'); // hook
    });

    beforeEach(() => { //before each test
        cy.reload(); // reload page
    });


    it('Alert', () => {
        cy.get('#alert').click();
        //cy.get('#resultado').should('contain', 'Alert!');
        cy.on('window:alert', str => {
            expect(str).to.equal('Alert Simples');
        });
        cy.window().then(win => {
            cy.stub(win, 'alert').as('alert');
        });
    });    
    
    it('Alert com mock', () => {
        const stub = cy.stub().as('alerta');//stub é um mock

        cy.on('window:alert', stub);//mock

        cy.get('#alert').click().then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Alert Simples');
        });
       
    });

    it('Confirm', () => {
        
        cy.on('window:confirm', msg => {
            expect(msg).to.equal('Confirm Simples');
            return true
        });
        cy.on('window:alert', msg => {
            expect(msg).to.equal('Confirmado');
        });

        cy.get('#confirm').click();
    });

    
    it('Deny', () => {
        
        cy.on('window:confirm', msg => {
            expect(msg).to.equal('Confirm Simples');
            return false; //deny
        });
        cy.on('window:alert', msg => {
            expect(msg).to.not.equal('1Confirmado');
        });

        cy.get('#confirm').click();
    });

    it.only('Prompt', () => {
        cy.window().then(win => {
            cy.stub(win, 'prompt').as('prompt').returns(42); //insere no prompt 
        });
        
        cy.on('window:confirm', (msg) => {
            expect(msg).to.equal('Era 42?');
        });

        cy.on('window:alert', (msg) => {
            expect(msg).to.equal(':D');
        });


        cy.get('#prompt').click()

    });


});

