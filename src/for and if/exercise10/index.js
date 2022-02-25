// Ejercicio 10
// Compara el primer elemento del array con cada uno de los siguientes. 
// Si alguno de los elementos siguientes es más pequeño que el primero, 
// intercambia la posición de ese elemento y el primero, y asi con todo el Array

let numbers = [2, 1, 4, 5, 6, 3, 7, 8, 1, 4, 6, 8, 1, 5, 7, 8, 3]
console.log("Desordenados", numbers)
for(let outer = 0; outer < numbers.length; outer++){
    for(let inner = outer + 1; inner < numbers.length; inner++
    ){
        if(numbers[outer] > numbers[inner]){
            let temp = null;
            temp = numbers[outer];
            numbers[outer] = numbers[inner];
            numbers[inner] = temp;
            console.log("proceso", numbers)            
        }
    }
}
console.log("Ordenados", numbers)


