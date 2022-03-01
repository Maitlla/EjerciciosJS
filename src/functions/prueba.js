// Ejercicio para probar
// La función comparar me sirve para ordenar de manera ascendente cuando se llama a la función .sort()
// El Array numbers llama a la función .sort() pasandole como argumento la función comparar previamente creada.
// En la posición [0] del Array numbers esta el número menor
/*
const numbers = [11, 9, 13, 12] 
function comparar(a, b) {
    return a - b;
}
console.log(numbers.sort(comparar));
console.log(numbers[0]);  */


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

const numbers = [11, 9, 13, 12, 1, 2, 5]

//Intercambiar posición
function swap(numberA, numberB, array) {
    const number = array[numberA];
    array[numberA] = array[numberB];
    array[numberB] = number;
}
//Devuelve el menor valor
function minorInRange(index1, index2, array) {
    let valorMenor = array[index1];
    if (array[index1] > array[index2]) {
        valorMenor = array[index2];
    }
    return valorMenor;
}

//Ordenar rangos
function orderRange(index1, index2, array) {
    let menorIndice = index1;

    if (menorIndice > index2) {
        menorIndice = index2;
    }
    for (let i = menorIndice; i < index2; i++) {
        for (let j = menorIndice; j < index2; j++) {

            if (array[i] < array[j]) {
                swap(i, j, array);
            }
        }
    }
    return array;
}

console.log(orderRange(0, 6, numbers));
console.log(orderRange(2, 4, numbers));

