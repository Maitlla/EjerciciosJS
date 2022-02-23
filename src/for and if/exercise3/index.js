// Ejercicio 3
// Calcular la media de los numeros del array
const numbers = [0, 99, 3, 121, 12, 1, 2];
let sum = 0;
let average = 0; // la media
let contador = 0;

for (let item of numbers) { // Array numbers
    contador++;
    sum = sum + item; // asigno a la variable sum la suma de la derecha
    
}

average = sum / contador; 
console.log(average);

// average = sum/numbers.length;

