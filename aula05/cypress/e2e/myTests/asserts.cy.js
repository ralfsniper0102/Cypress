///<reference types="Cypress" />

it('Equality', () => { ///equaldade
    const a = 1;
    expect(a).to.equal(1); ////compara o valor
   // expect(a, 'Deveria ser 1').to.be.equal(3); ////compara o valor
    //expect(a, 'Deveria ser 1').equal(2); ////compara o valor
    expect(a, 'Nao Deveria ser 1').not.to.be.equal(2); ////compara o valor

});

it('Truthy', () => { ///verdadeiro')
    const a = true;
    const b = null;
    let c;
    //expect(a).to.be.truthy; 
    expect(a).to.be.true; 
    expect(a).to.be.ok; 
    //expect(b).to.be.false;
    expect(true).to.be.true;
    expect(c).to.be.undefined;

}
);

it('Object Equality',() => { ///objeto
    const obj1 = {
        a: 1,
        b: 2
    }

    const obj2 = {
        a: 1,
        b: 2
    }

    expect(obj1).to.be.deep.equal({a: 1, b: 2});////compara o valor do objeto
    expect(obj1).eql({a: 1, b: 2}); // redução de codigo
    expect(obj1).include({a: 1}); // verificar um só objeto
    expect(obj1).to.have.property('b'); // verificar se tem a propriedade 
    expect(obj1).to.have.property('b', 2)// verificar se tem a propriedade e o valor;
    expect(obj1).to.not.be.empty; // verificar se não é um objeto vazio
    expect({}).to.be.empty; // verificar se é um objeto vazio
});

it('Arrays', () => { ///array
    const arr = [1, 2, 3];
    
    expect(arr).to.have.members([1,2,3]); // verificar se tem os valores - tem que ser igual
    expect(arr).to.include.members([1,3]); // verificar se tem o valores
    expect(arr).to.include(1); // verificar se tem o valor
    expect(arr).to.not.be.empty; // verificar se não é um array vazio
    expect([]).to.be.empty; // verificar se é um array vazio
});

it('Types', () => { ///tipos
    const num = 1;
    const str = 'string';

    expect(num).to.be.a('number'); // verificar se é um numero
    expect(str).to.be.a('string'); // verificar se é uma string
    expect({}).to.be.an('object'); // verificar se é um objeto
    expect([]).to.be.an('array'); // verificar se é um array
    expect(() => {}).to.be.a('function'); // verificar se é uma função
    expect(new Date()).to.be.a('date'); // verificar se é uma data
});

it('String', () => { ///string'
    const str = 'string de teste';

    expect(str).to.be.a('string'); // verificar se é uma string
    expect(str).to.have.length(15); // verificar se tem o tamanho
    expect(str).to.be.equal('string de teste'); // verificar se é igual    
    expect(str).to.contains('teste'); // verificar se contem o valor
    expect(str).to.match(/teste/); // verificar se contem o valor
    expect(str).to.match(/^string/ || /^String/); // verificar se começa com o valor
    expect(str).to.match(/te$/); // verificar se termina com o valor
    expect(str).to.match(/.{15}/); // verificar se tem o tamanho
    expect(str).to.match(/\w+/); // verificar se tem caracteres
    expect(str).to.match(/\D+/); //verificar que não contém numeros

});

it('Numbers', () => { ///numeros
    const num = 4;
    const floatNumber = 5.2123;

    expect(num).to.be.equal(4); // verificar se é igual
    expect(num).to.be.above(3); // verificar se é maior que
    expect(num).to.be.below(6); // verificar se é menor que
    expect(floatNumber).to.be.equal(5.2123); // verificar se é igual
    expect(floatNumber).to.be.closeTo(5.2, 0.1); // verificar se é igual, com precissão de 0.1
    expect(floatNumber).to.be.above(5); // verificar se é maior que
});
