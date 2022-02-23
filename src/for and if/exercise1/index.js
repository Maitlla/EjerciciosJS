// Ejercicio 1
// Hacer la media

const numbers = [22,1,4,3,5,7,8,9,12,11];
const odd = []; // impar
const even = [] // par

for (let item of numbers) { 
    console.log("item:", item);

    if (item % 2 === 0) {
        even.push(item);

    } else {
        odd.push(item);
    }

}

console.log("odd:", odd);
console.log("even:", even);

