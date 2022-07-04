/// <reference types="Cypress" />



describe('Work with alerts', () => {
    before(() => { //before all tests




    });

    beforeEach(() => { //before each test

    });

    it('login', () => {
        cy.request({ ///login
            method: 'POST',
            url: 'https://barrigarest.wcaquino.me/signin',
            body: {
                email: "ralfsniper0102@gmail.com",
                redirecionar: false,
                senha: "123456"
            }
        }).its('body.token').should('not.be.empty') //verifica se o token não está vazio
        
    });

  
});

