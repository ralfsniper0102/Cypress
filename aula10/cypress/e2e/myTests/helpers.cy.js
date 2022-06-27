/// <reference types="cypress" />

describe('Helpers...', () => {
   it('Wrap', () => {
      const obj = { nome: 'User', idade: 20 }
      expect(obj).to.have.property('nome')
      cy.wrap(obj).should('have.property', 'nome')// utilizar o should para objeto

      cy.visit('https://www.wcaquino.me/cypress/componentes.html');
      //cy.get('#formNome').type('Funciona?')

      cy.get('#formNome').then(($el) => {
         //$el.val('Funciona?');//insert with Jquery
         cy.wrap($el).type('Funciona via cypress');//insert with jquery
      });


      const promise = new Promise((resolve, reject) => {
         setTimeout(() => {
            resolve(10)
         }, 500);
      });

      cy.get('#buttonSimple').then(()=>{
         console.log('achei o primeiro botão');
      })

      // promise.then(num=>{ //não segue a sequencia do codigo
      //    console.log(num);
      // });

      cy.wrap(promise).then(num => { /// segue a sequencia do código
         console.log(num);
      });

      cy.get('#buttonLazy').then(()=>{
         console.log('achei o segundo botão');
      })

      cy.wrap(1).then(num=>{
         return 2; ///quando retornar um valor, o cy.wrap vai retornar o valor 2
      }).should('be.equal', 2);
   });

   it('Its...', () => {
      const obj = { nome: 'User', idade: 20 };
      cy.wrap(obj).should('have.property', 'nome', 'User');// utilizar o should para objeto
      cy.wrap(obj).its('nome').should('be.equal', 'User');// utilizar o should para objeto

      const obj2 = { nome: 'User', idade: 20, endereco: {rua: 'são jorge'} };
      cy.wrap(obj2).its('endereco').its('rua').should('contain', 'jorge');// utilizar o should para objeto
      cy.wrap(obj2).its('endereco.rua').should('contain', 'jorge');


      cy.visit('https://www.wcaquino.me/cypress/componentes.html');
      cy.title().should('be.equal', 'Campo de Treinamento');//assertion
      cy.title().its('length').should('be.equal',20);//assertion


   });

   it.only('Invoke..', () => {
      const getValue = () => 1;
      const soma = (a, b) => a + b;

      cy.wrap({fn: getValue}).invoke('fn').should('be.equal', 1);
      cy.wrap({fn: soma}).invoke('fn', 1, 2).should('be.equal', 3);
      
      cy.visit('https://www.wcaquino.me/cypress/componentes.html');

      cy.get('#formNome').invoke('val', 'Texto via Invoke');


      cy.window().invoke('alert', 'Alerta via Invoke');

      cy.get('#resultado')
      .invoke('html', '<input type="button", value="hacked!"/>')
   });





})