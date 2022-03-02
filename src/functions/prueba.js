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


/*
Función flecha
numbers.sort((a,b) => {return a-b});
Función anónima
numbers.sort(function(a,b) {return a-b});

function primera(param1){
    
}
function segunda(param1){

}
primera(segunda); // Pasas la función
primera(segunda());// Pasas el resultado de ejecutar la función
*/