/// <reference types="Cypress" />

it.only('A external test...', () => { //apenas executa esse teste

});

describe('Should group test....', ()=>{ //grupo de testes
    describe('Should group test....', ()=>{ //grupo de testes
    
        it.skip('A external test...', () => { //não executa o teste

        });
    });
    
    it('A external test...', () => { //teste

    });
});