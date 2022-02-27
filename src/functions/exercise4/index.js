// Functions 4
// Crea una función de nombre ```swap``` que intercambie la posición de dos elementos de un array

const numbers = [11,12,13,14]
function swap(posicionInicial, posicionFinal, numbers) { 
    let casilla = null; // vale igual con 0
    // copio el valor de posicionInicial en la variable casilla, para que no se pierda en el intercambio
    casilla = numbers[posicionInicial]; 
    // asigno el valor de posicionFinal a posicionInicial del Array numbers
    numbers[posicionInicial] = numbers[posicionFinal];
    // el valor guardado (copiado) en la variable casilla, se asigna a posicionFinal, produciendose el intercambio
    numbers[posicionFinal] = casilla;    
    //return (numbers);  
}
// llamo a la function swap(posicionInicial, posicionFinal, numbers) le paso los parámetros: 
// en posicionInicial 0, en posicionFinal 3 y también le paso el Array numbers
swap(0,3,numbers);
console.log(numbers);

swap(1,2,numbers);
console.log(numbers);
