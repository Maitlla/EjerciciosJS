// Functions 1
// Define una función que busque y entregue (return) 
// el menor valor de un array de números

// Primero resuelvo como hayar el número menor, al recorrer un Array
/*
const numbers1 = [22,1,4,3,5,7,8,9,12,11];

let min = numbers1[0];

for (let i = 0; i < numbers1.length; i++) { // recorro el Array

    if(numbers1[i] < min) { // si el valor que tiene la posición [i] del Array numbers1 
                            // (la posición que toque según recorre el Array),
                            // es menor que la variable min, posición [0] del Array numbers1                    
        min = numbers1[i];  // se asigna (se guarda) ese valor en la variable min
    }
}
console.log(min)
*/

// Defino una función y entreguo (return)

const numbers1 = [22,1,4,3,5,7,8,9,12,11];
const numbers2 = [22,7,4,3,5,7,8,9,12,11];
const numbers3 = [22,6,4,4,5,7,8,9,12,11];
const numbers4 = [22,9,6,8,5,7,8,9,12,11];
 
// Devuelve el menor valor del array que se le pasa
function minorValue(numbers1) { // function minorValue() vale para cualquier Array que se le pase, 
                               
    let min = numbers1[0];

    for (let i = 0; i < numbers1.length; i++) {
        if (numbers1[i] < min) {
            min = numbers1[i];
        }
    }
    console.log(min);
    return min; // retorno el valor guardado en la variable min
}

const minor1 = minorValue(numbers1); // llamo a la function minorValue(numbers1)
                                     // pasandole como parámetro el Array numbers1
                                     // le asigno el resultado a la constante minor1
console.log(minor1);
console.log(minorValue(numbers2));
console.log(minorValue(numbers3));
console.log(minorValue(numbers4)); 

