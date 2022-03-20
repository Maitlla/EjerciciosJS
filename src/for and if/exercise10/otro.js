
const numbers = [11, 9, 13, 2, 5, 4, 9, 22, 12, 0, 16, 12, 35, 8, 74]
//let guardo = null;

// copio el valor de posicionA en la variable guardo, para que no se pierda 
//guardo = numbers[posicionA];
// asigno el valor de posicionB a posicionA 
//numbers[posicionA] = numbers[posicionB];
// el valor guardado (copiado) en la variable guardo se asigna a posicionB
//numbers[posicionB] = guardo;

for (let i = posicionInicial; i <= posicionFinal; i++) {
    // lo comparo con el valor guardado en la variable minor, si el número es más pequeño...
    if (numbers[i] < minor){ 
        // ...lo asigno (guardo) en la variable minor
        minor = numbers[i];

    }

function minorInRange(posicionInicial, posicionFinal, numbers) {
    // asigno (guardo) el valor de posicionInicial del Array numbers a la variable minor
    let minor = numbers[posicionInicial]; 
    // recorro el Array entre dos índices determinados, (entre posicionInicial y posicionFinal) 
    for (let i = posicionInicial; i <= posicionFinal; i++) {
        // lo comparo con el valor guardado en la variable minor, si el número es más pequeño...
        if (numbers[i] < minor){ 
            // ...lo asigno (guardo) en la variable minor
            minor = numbers[i];

        }
    }
    //console.log(minor);
    return minor; 
}

console.log(numbers);




// Ejercicio para probar

const numbers = [11, 9, 13, 2, 5, 4, 9, 22, 12, 0, 16, 12, 35, 8, 74]
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
console.log(numbers.sort(comparar));
// Una vez ordenado el Array numbers, llamo a la función minorInRange
// pasandole índice posicionInicial y índice posicionFinal, entre los que busco el número menor
console.log(minorInRange(0, 3, numbers));
console.log(minorInRange(4, 9, numbers));
console.log(minorInRange(1, 5, numbers));
