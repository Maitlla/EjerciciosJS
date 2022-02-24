// Ejercicio 10
// Compara el primer elemento del array con cada uno de los siguientes. 
// Si alguno de los elementos siguientes es más pequeño que el primero, 
// intercambia la posición de ese elemento y el primero, y asi con todo el Array

let numbers = [2, 1, 4, 5, 6, 3, 7, 8, 1, 4, 6, 8, 1, 5, 7, 8, 3]
let menor = numbers[0];
for (let i = 0; i < numbers.length; i++) { // recorro el Array

    if (numbers[i] < menor) { // si el valor que tiene la posición [i] del Array numbers 
        // (la posición que toque según recorre el Array),
        // es menor que la variable menor, posición [0] del Array numbers                    
        menor = numbers[i];  // se asigna (se guarda) ese valor en la variable menor
    }
}
console.log(menor) // saco por consola el valor de la variable menor (el número menor)








/*
let numbers = [2, 1, 4, 5, 6, 3, 7, 8, 1, 4, 6, 8, 1, 5, 7, 8, 3]
let menor = numbers[0];
for (let i = 0; i < numbers.length; i++) { // recorro el Array

    if (numbers[i] < menor) { // si el valor que tiene la posición [i] del Array numbers 
        // (la posición que toque según recorre el Array),
        // es menor que la variable menor, posición [0] del Array numbers                    
        menor = numbers[i];  // se asigna (se guarda) ese valor en la variable menor
    }
}
console.log(menor) // saco por consola el valor de la variable menor (el número menor)
*/


 //numbers.reverse(i);
//reverse()
//unshift()