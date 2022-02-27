// Functions 4
// Crea una función de nombre ```swap``` que intercambie la posición de dos elementos de un array

let numbers = [11,12,13,14]
function swap(posicionA, posicionB, numbers) { 
    let casilla = null; // vale igual con 0
    // copio el valor de posicionA en la variable casilla, para que no se pierda en el intercambio
    casilla = numbers[posicionA]; 
    // asigno el valor de posicionB a posicionA del Array numbers
    numbers[posicionA] = numbers[posicionB];
    // el valor guardado (copiado) en la variable casilla, se asigna a posicionB, produciendose el intercambio
    numbers[posicionB] = casilla;    
    //return (numbers);  
}
// llamo a la function swap(posicionA, posicionB, numbers) le paso los parámetros: 
// en posicionA 0, en posicionB 3 y también le paso el Array numbers
swap(0,3,numbers);
console.log(numbers);

swap(1,2,numbers);
console.log(numbers);
