// objects as maps 3
// Adapta el código para poder ordenar los corredores del array `chrono` del ejercicio anterior

const people = [
    {
        name: "Ana",
        time: 102.01
    },
    {
        name: "Pablo",
        time: 105.82
    },
    {
        name: "Marco",
        time: 100.4
    },
    {
        name: "Luisa",
        time: 103.39
    },
    {
        name: "Pedro",
        time: 109.09
    },
]

function aFasterThanB(runnerA, runnerB) {
    return (runnerA.time > runnerB.time); // retorna true si runnerA es mayor que runnerB, si no false  
}

function bFasterThanA(runnerA, runnerB) {
    return(runnerB.time > runnerA.time); // retorna true si runnerB es mayor que runnerA, si no false 
}

function swap (idxA, idxB, array) { // función para cambio de posiciones en un Array 
    let temporal = array[idxA];
    array[idxA] = array[idxB];
    array[idxB] = temporal;
}

// función comparación tipo burbuja, compara posición [A] con la siguiente [B], ordenando valor de menor a mayor, en este caso
// y despues compara [B] con [C] ..... y así sucesivamente
function sort (comparator, array) { 
    for ( let currentIdx = 0 ; currentIdx < array.length-1 ; currentIdx++) {
        for ( let nextIdx = currentIdx+1 ; nextIdx < array.length ; nextIdx++ ) {
            // si el resultado de comparar el indice actual (currentIdx) y el suguiente (nextIdx) es true
            if (comparator(array[currentIdx], array[nextIdx])){ 
                // intercambias las posiciones de currentIdx y nextIdx 
                 swap (currentIdx, nextIdx, array); 
            }
        }
    }
}

sort(aFasterThanB, people);
console.log("Runner de menor a mayor ", JSON.stringify(people)); // JSON.stringify() se ven los objetos por consola, sin no se ve así [{}]
sort(bFasterThanA, people);
console.log("Runner de mayor a menor ", JSON.stringify(people));




