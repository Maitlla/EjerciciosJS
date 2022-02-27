// Ejercicio 10
// Compara el primer elemento del array con cada uno de los siguientes. 
// Si alguno de los elementos siguientes es más pequeño que el primero, 
// intercambia la posición de ese elemento y el primero, y asi con todo el Array

let numbers = [2, 1, 4, 5, 6, 3, 7, 8, 1, 4, 6, 8, 1, 5, 7, 8, 3]
console.log(numbers)
for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[i] > numbers[j]) { 
            // asigno (copio) la posición de [i] en el Array numbers a la variable casilla
            let casilla = numbers[i];
            // asigno la posición de [j] a la posición de [i] en el Array, en este caso
            // es que paso el número que esta en segundo lugar al primer lugar
            numbers[i] = numbers[j];
            // la variable casilla que tenía asignada la posición de [i] en el Array,
            // ahora se la asigno a [j] y así se hace el intercambio de posiciones
            numbers[j] = casilla;
            console.log(numbers)
        }
    }
}
console.log(numbers)


