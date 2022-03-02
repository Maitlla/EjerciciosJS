
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


























/*

// Ejercicio para probar
// La función comparar me sirve para ordenar de manera ascendente cuando se llama a la función .sort()
// El Array numbers llama a la función .sort() pasandole como argumento la función comparar previamente creada.
// En la posición [0] del Array numbers esta el número menor

const numbers = [11, 9, 13, 12] 
function comparar(a, b) {
    return a - b;
}
console.log(numbers.sort(comparar));
console.log(numbers[0]);  


/*
EJEMPLO DE PRUEBA

const arr = ['80', '9', '700', 40, 1, 5, 200];
// función para comparar
function comparar(a, b) { 
    // a menos b, ordena de menos a más, útil cuando se llama a la función .sort que no ordena normal, b menos a ordena al revés
    return a - b; 
}
// Array arr llama a la función sort() y le pasa como argumento la función comparar
arr.sort(comparar);
console.log(arr);
console.log('original:', arr.join()); // original: 1,5,9,40,80,200,700
// otra manera de hacerlo directamente en el console.log 
console.log('ordenado con función:', arr.sort(comparar));   */

