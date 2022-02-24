// Functions 2
// solucionar los problemas y que el programa ofrezca un resultado coherente

let number = 0;
function plusone(number) {
    number = number + 1;
    return number; // return tiene que estar dentro de la return
    console.log(number)
}
//console.log(number); // fuera de la function number tiene el valor de 0

// llamo a la function plusone(number) para que me retorne el valor de number 
// y lo asigno a const elResultado
const elResultado = plusone(number);
// saco por consola el valor de la constante elResultado
console.log(elResultado); 

