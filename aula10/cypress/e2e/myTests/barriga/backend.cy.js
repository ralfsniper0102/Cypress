/// <reference types="Cypress" />



describe('Backend', () => {
    let token;

    before(() => { //before all tests
        cy.getToken('ralfsniper0102@gmail.com', '123456')//pega o token
            .then(tkn => {
                token = tkn;  ///salva o token fora antes de qualquer teste
            })



    });

    beforeEach(() => { //before each test

    });

    it('login', () => {


        cy.request({
            url: 'https://barrigarest.wcaquino.me/contas',
            method: 'POST',
            headers: {
                Authorization: `JWT ${token}`
            },
            body: {
                nome: "Conta via Rest"
            }
        }).as('response') //utilizar em outro lugar
    });
    cy.get('@response').then(res => { // outra forma de continuar
        expect(res.status).to.eq(201);
        expect(res.body).to.have.property('id');
        expect(res.body).to.have.property('nome', 'Conta via Rest');
    })


});

