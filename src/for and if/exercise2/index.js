// Ejercicio 2
// Contar cuantos elementos hay en el array ```number```

const numbers = [0,1,2,4,5,9,3,6,7,8];

let counter = 0;
console.log(counter);

for (let item of numbers) {
    counter++; // cada vez que paso por el bucle sumo 1, counter = counter+1

    console.log(numbers[counter]); // sale por consola todos los números
                                   // del Array que se recorren con el bucle for
                                   // y la variable counter devuelve 10, 
                                   // los elementos que tiene el Array
    
}

console.log(counter);

