// objects as maps 1
// Contar el número de veces que se repite cada letra en una frase

const phrase = "No hay bien que por mal no venga"; // String - Array

// VERSIÓN 1
const counters = {}; // Objeto counters tiene propiedades {a: 0, b: 0, c:0 ........ z:0} 
function countLetter (letter, counters) {
    // El método hasOwnProperty() devuelve un booleano indicando si el objeto tiene la propiedad especificada
    // obj.hasOwnProperty(prop)
    if(counters.hasOwnProperty(letter) === false){ 
        // si no hay letra repetida se cuenta solo esa 
        counters[letter] = 1;
    }else{
        // cada vez que encuentra la misma letra suma una más al contador
        counters[letter]++;
    }  
}
// para cada letra del Array phrase llamo a la function countLetter (letter, counters)
for (letter of phrase) {
    console.log(letter);
    countLetter(letter, counters);
}
console.log(counters); // devuelve {N: 1, o: 3,  : 7, h: 1, a: 3, …}
console.log(JSON.stringify(counters)); // devuelve
// {"N":1,"o":3," ":7,"h":1,"a":3,"y":1,"b":1,"i":1,"e":3,"n":3,"q":1,"u":1,"p":1,"r":1,"m":1,"l":1,"v":1,"g":1}


// VERSIÓN 2
//const recuento = [];
const recuento = {};
for (letter of phrase) {
    // Si me dicen una letra que no tengo
    if (recuento[letter] === undefined){
    // empiezo con uno
        recuento[letter] = 1;
    }else{
    // Si me dicen una letra que sí tengo
    // le summo uno
        recuento[letter] = recuento[letter]+1;
    }
}
console.log(recuento);
console.log(JSON.stringify(recuento));


