// Functions 6
// Entre dos índices del Array numbers ordeno sus elementos de manera ascendente, y me quedo con el valor menor

const numbers = [11, 9, 13, 2, 5, 4, 9, 22, 12, 0, 16, 12, 35, 8, 74]
function burbuja(indiceInicio, indiceFinal, arr) {
    let minor = numbers[indiceInicio];
    indiceFinal = indiceFinal + 1;
    console.log("Lista sin ordenar:");
    console.log(numbers);

    for (let i = 1; i < indiceFinal; i++) {
        for (let j = indiceInicio; j < (indiceFinal - i); j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
            if (numbers[i] < minor){ 
                // ...lo asigno (guardo) en la variable minor
                minor = numbers[i];
            }
        }
    }
     console.log("Lista ordenada:");
     console.log(numbers);
     console.log(minor);
     return minor; 
}
burbuja(1, 11, numbers);

















