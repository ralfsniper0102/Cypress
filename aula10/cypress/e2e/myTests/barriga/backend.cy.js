/// <reference types="Cypress" />



describe('Backend', () => {
    let token;

    

    before(() => { //before all tests
        it('Login', () => {
        cy.getToken('ralfsniper0102@gmail.com', '123456')//pega o token
            .then(tkn => {
                token = tkn;  ///salva o token fora antes de qualquer teste
            })
            
        })

        console.log(token);

    });

    beforeEach(() => { //before each test
       
        cy.resetRest(); //resetar o rest
    });

    it('criar conta', () => {

        cy.request({ // cria uma nova conta 
            url: 'https://barrigarest.wcaquino.me/contas',
            method: 'POST',
            headers: {
                Authorization: `JWT ${token}`
            },
            body: {
                nome: "Conta via Rest"
            }
        }).as('response') //utilizar em outro lugar
        
        cy.get('@response').then(res => { // outra forma de continuar
            expect(res.status).to.eq(201);
            expect(res.body).to.have.property('id');
            expect(res.body).to.have.property('nome', 'Conta via Rest');
        })
        
    });
    


    // it.only('reset', () => {
    //     cy.request({ // reseta o banco de dados
    //         url: 'https://barrigarest.wcaquino.me/reset',
    //         method: 'GET',
    //         headers: {
    //             Authorization: `JWT ${token}`
    //         }
    //     }).as('responseReset') //utilizar em outro lugar
    // })
    // cy.get('@responseReset').then(res => { // outra forma de continuar
    //     expect(res.status).to.eq(204);
    // })

});

