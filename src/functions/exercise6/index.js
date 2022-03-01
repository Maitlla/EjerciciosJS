// Functions 6
// Ordeno el Array numbers de manera ascendente, y entre dos índices del array me quedo con número menor

const numbers = [11, 9, 13, 12]
// La función comparar me sirve para ordenar de manera ascendente cuando llame a la función .sort()
function comparar(a, b) {
    return a - b;
}
//console.log(numbers.sort(comparar));
//console.log(numbers[0]);  

function minorInRange(posicionInicial, posicionFinal, numbers) {
    // asigno (guardo) el valor de posicionInicial del Array numbers a la variable minor
    let minor = numbers[posicionInicial];
    // recorro el Array entre dos índices determinados, (entre posicionInicial y posicionFinal) 
    for (let i = posicionInicial; i <= posicionFinal; i++) {
        // lo comparo con el valor guardado en la variable minor, si el número es más pequeño...
        if (numbers[i] < minor) {
            // ...lo asigno (guardo) en la variable minor
            minor = numbers[i];
        }
    }
    //console.log(minor);
    return minor;
}
// Llamo a la función .sort() pasandole como argumento la función comparar que he creado antes, para ordenar el Array numbers
numbers.sort(comparar);
// Para comprobar que el Array esta ordenado
console.log(numbers);
// Una vez ordenado el Array numbers, llamo a la función minorInRange
// pasandole índice posicionInicial y índice posicionFinal, entre los que busco el número menor
console.log(minorInRange(0, 3, numbers));
console.log(minorInRange(2, 3, numbers));
console.log(minorInRange(1, 3, numbers));

