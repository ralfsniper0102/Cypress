describe('Work with popup', () => {
    before(() => { //before all tests
        cy.visit('https://www.wcaquino.me/cypress/componentes.html'); // hook
    });

    beforeEach(() => { //before each test
        cy.reload(); // reload page
    });

    it('PopUp', () => {
        cy.window().then(win => {
            cy.stub(win, 'open').as('winOpen');
        });

        cy.get('#buttonPopUp').click();
        cy.get('@winOpen').should('be.called'); //verifica se o método open foi chamado - utilizando @ puxando o stub




        // cy.get('#frame1').then(iframe=>{
        //     const body = iframe.contents().find('body');
        //     cy.wrap(body).find('#tfield')
        //     .type('Rafael')
        //     .should('have.value', 'Rafael');

        // });

    });

    it('PopUp 2', () => {
        cy.visit('https://www.wcaquino.me/cypress/frame.html');

        const stub = cy.stub().as('alerta');//stub é um mock

        cy.on('window:alert', stub);//mock

        cy.get('#otherButton').click()
            .then(() => {
                expect(stub.getCall(0)).to.be.calledWith('Click OK!');
            });

        cy.get('#tfield').type('Rafael');
        cy.get('#otherButton').click()
            .then(() => {
                expect(stub.getCall(0)).to.be.calledWith('Click OK!');
            });

        // cy.get('#formCadastrar').click()



    });

    it('PopUp Link', () => {
        cy.get('[href="./frame.html"]')
        .should('have.prop', 'href')
        .and('equal', 'https://www.wcaquino.me/cypress/frame.html');
            
    });

    it('PopUp Link dinamico', () => {
        cy.get('[href="./frame.html"]')
        .then($a=>{
            const href = $a.prop('href');
            cy.visit(href);
            cy.get('#tfield').type('Rafael');
        });
            
    });

    it.only('Show force link on same page', () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html'); // hook
        cy.contains('Popup2')
        .invoke('removeAttr','target') //remove o atributo target
        .click();
        cy.get('#tfield').type('Rafael');
    });
});