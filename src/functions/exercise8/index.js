// Functions 8
// Cambia las posiciones del elemento en las posiciones `idxA` e `idxB` del array `array`  (si a > b)  (si b > a)

const numbers = [4,2,9,6,1,0,3,6,5,2,9];

function aGreatherThanB (a, b) { // ordena de manera ascendente
    return a > b;
    
}

function bGreatherThanA (a,b) { // ordena de maera descendente
    return b > a;
   
}

function swap (idxA, idxB, array) {
    x = array[idxA];
    array[idxA] = array[idxB];
    array[idxB] = x;
  
}

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

console.log(numbers);
sort(aGreatherThanB, numbers);
console.log(numbers);
sort(bGreatherThanA, numbers);
console.log(numbers);


