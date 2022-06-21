it ('nada agora', () => {})

function soma(a,b){
    return a + b
}

const soma1 = function(a,b){
    return a + b
}

const soma2 = (a,b) => {
   return a + b
}

it('an arrow test...', () => {
    console.log('arrow - refere-se fora do escopo - não pegou o contexto - escopo superior', this) 
});

it('a function test...', function() {
    console.log('function - referece ao escopo que esta sendo executado - pegou o contexto - referencia a quem invocou', this) 
})

console.log(soma(10,20));
console.log(soma1(10,20));
console.log(soma2(10,20));