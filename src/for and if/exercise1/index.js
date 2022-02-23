// Ejercicio 1
// guardar los números impares del array ```numbers``` en el array ```odd``` 
// y los pares en el array ```even```

const numbers = [22,1,4,3,5,7,8,9,12,11];
const odd = []; // impar
const even = [] // par

for (let item of numbers) { 
    console.log("item:", item);

    // el resto de dividir el número que haya en item entre 2
    // si es igual estrictamente a 0 es un número par
    if (item % 2 === 0) {  // % módulo
        even.push(item);

    } else { // si no, es un número impar
        odd.push(item);
    }

}

console.log("odd:", odd);
console.log("even:", even);

