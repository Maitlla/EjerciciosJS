// Funciones exercise 7
// Función recursiva ejemplo - contar elementos HTML y sus hijos
function contarElmentosHtml(element) { 
    let total = 1;
    for(let i=0; i<element.children.length; i++){
        total = total + contarElmentosHtml(element.children[i]);
    }
    return total;
}
const elemntoHtml = document.querySelector("html");
console.log(elemntoHtml)
console.log(contarElmentosHtml(elemntoHtml));




const numbers = [11,9,13,12,0,2,99,2,34,5,4,9,22,16,76,35,75,2,35,8,74]

function minorInRange (start, end, array) {
    // Empiezo suponiendo que el primer elemento
    // del rango es el menor.
    let minorIdx = start;
    // Comparo el primer elemento del rango con
    // el siguiente y posteriores: start+1
    for (let idx = start+1; idx < end; idx++) {
        if ( array[minorIdx] > array[idx] ) {
            minorIdx = idx;
            console.log(numbers);
        }
    }
    return minorIdx
}

function swap (idx1, idx2, array) {
    const temp = array[idx1];
    array[idx1] = array[idx2];
    array[idx2] = temp;
}

function sort (array, start = 0) {
    let minorIdx = minorInRange(start, array.length, array);
    if ( minorIdx > start ) swap(start, minorIdx, array);
    if ( start < array.length ) sort(array, ++start)
}

sort(numbers);

console.log(numbers);




