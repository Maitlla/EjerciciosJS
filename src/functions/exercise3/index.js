// Functions 3
// conseguir una función que calcule la raíz cuadrada, 
// a menos que se le indique otra potencia

function calculaPotencia(number,potencia) {
    // si potencia esta sin definir
    if(potencia === undefined) { 
        // asigno un medio a potencia (raíz cuadrada)
        potencia = 1/2; 
    }
    return Math.pow(number,potencia);
    
}
console.log(calculaPotencia(25))
console.log(calculaPotencia(8, 1 / 3))
console.log(calculaPotencia(2, 3))
console.log(calculaPotencia(5, 2))

// return Math.sqrt(number; // devuelve raíz cuadrada
    /*
        let elevado = 5 ** 2;
        5 ** 2 // -> 25 elevado al cuadrado
        let elevado = 2 ** 3;  // let elevado = Math.pow(2, 3);
        2 ** 3 // -> 8 elevado al cubo

        25 ** (1 / 2) // -> 5 raíz cuadrada
        const numero = 25;
        const raizCuadrada = Math.sqrt(numero);
        console.log(raizCuadrada); // 5
    
        8 ** (1 / 3) // -> 2 raíz cúbica
        const numero = 8;
        const raizCubica = Math.pow(numero, 1 / 3);
        console.log(raizCubica);
    */














