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

