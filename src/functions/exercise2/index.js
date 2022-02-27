// Functions 2
// solucionar los problemas y que el programa ofrezca un resultado coherente

let number = 0;
function plusone(number) {
    number = number + 1;
    console.log(number)
    return number; // return tiene que estar dentro de la return
    
}
//console.log(number); // fuera de la function number tiene el valor de 0

// llamo a la funcion plusone(number) y el valor que devuelve se lo asigno a la variable number
number = plusone(number); 
console.log(number) ;