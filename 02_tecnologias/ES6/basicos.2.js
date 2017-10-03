// Ejemplo de código en ES6

let oPrueba = {
    precio: 12,
    iva : 1.16,
};  

oPrueba.calculaIvaAsiync = function () {
    setTimeout  (function () {
        let precioFinal =  this.precio * this.iva
        console.log(`
        Usando una funcion clásica: 
        El precio final es ${precioFinal}
        `);
    }, 1000)
}

oPrueba.calculaIvaAsiync()
// la función callback del método setTimeout
// interpreta this como una llamada al sistema, 
// no como el objeto en el que se ha definido


// Versión alternativa unando una arrow function

oPrueba.calculaIvaAsiync_Arrow = function () {
    setTimeout  (() => {
        let precioFinal =  this.precio * this.iva;
        console.log(`
        Usando una arrow function: 
        El precio final es ${precioFinal}
        `);
    }, 1000)
}

 oPrueba.calculaIvaAsiync_Arrow();
// la función callback del método setTimeout
// interpreta this semanticamente, según donde se ha definido la función que lo usa
// y no según donde se utiliza, que supondría hacerlo como una llamada al sistema.