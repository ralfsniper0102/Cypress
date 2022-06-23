it ('sem testes, ainda', () => {
   

})

const getSomething = function () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(100 )
        }, 1000)
    }
)}


const system = async () =>{
    console.log('init system...');
    const prom = await getSomething();
    
    console.log(`Something is ${prom}`);
    console.log('end system...');
}

system();

