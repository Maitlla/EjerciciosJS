// Functions 3
// conseguir una función que calcule la raíz cuadrada, 
// a menos que se le indique otra potencia

function calculaPotencia(number, ) {
    if (number ** (1 / 2) === Math.sqrt(number) { //esta mal
        const number = prompt('Introduce un número: ');
        const result = Math.sqrt(number);
        console.log(`La raiz cuadrada de ${number} es ${result}`);
        return result;
    } else {
        const number = prompt('Introduce un número: ');
        const otherPower = prompt('Introduce una potencia: ');
        const result = Math.pow(number, otherPower);
        console.log(`El número ${number} a la potencia ${otherPower} es ${result}`);
        return result;
    }
    console.log(calculaPotencia(5, 2))
    console.log(calculaPotencia(2, 3))
    console.log(calculaPotencia(25))
    console.log(calculaPotencia(8, 1 / 3))

    let elevado = 5 ** 2;
    5 ** 2 // -> 25 elevado al cuadrado
    let elevado = 2 ** 3;  // let elevado = Math.pow(2, 3);
    2 ** 3 // -> 8 elevado al cubo
    /*
        25 ** (1 / 2) // -> 5 raíz cuadrada
        const numero = 25;
        const raizCuadrada = Math.sqrt(numero);
        console.log(raizCuadrada); // 5
    
        8 ** (1 / 3) // -> 2 raíz cúbica
        const numero = 8;
        const raizCubica = Math.pow(numero, 1 / 3);
        console.log(raizCubica);
    */
}















