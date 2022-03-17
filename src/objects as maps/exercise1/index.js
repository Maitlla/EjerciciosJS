// objects as maps 1
// Contar el número de veces que se repite cada letra en una frase

const phrase = "No hay bien que por mal no venga"; // String - Array
const counters = {}; // Objeto counters tiene propiedades {a: 0, b: 0, c:0 ........ z:0} 
function countLetter (letter, counters) {
    // El método hasOwnProperty() devuelve un booleano indicando si el objeto tiene la propiedad especificada
    // obj.hasOwnProperty(prop)
    if(counters.hasOwnProperty(letter) === false){
        counters[letter] = 1;
    }else{
        counters[letter]++;
    }  
 

}
for (letter of phrase) {
    console.log(letter)
    countLetter(letter, counters)
}
console.log((counters))
console.log(JSON.stringify(counters))








