// Functions 5
// función para buscar el menor número de un array, entre dos determinados índices del array

const numbers = [11, 9, 13, 12]
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
console.log(minorInRange(0, 3, numbers));
console.log(minorInRange(2, 3, numbers));
console.log(minorInRange(1, 3, numbers));



