//Ejercicios examen Javascript 21/03/2022

/*
const preguntas = {};
preguntas["primera"] = "que formas tenemos...";
*/

/*
const preguntas = [];
preguntas[0] = "que formas tenemos...";

*/

/*
let y = 0;
function sumaUno(x) {
    x = x + 1;
    return x;
}
y = sumaUno(y);
console.log(x);
*/ 

/*
let x = 0;
for (let y = 0; y < 3; y++) {
    x++;
}
console.log(y); // error y no ha sido definido
*/

/*
const valores = [4,9,2,1,3,8,7];
for (let x of valores) {
    if(x > 2) {
        console.log(x);
    }
}
*/

/*
for (let x = 0; x < 2; x++) {
    for (let y = 0; y < 3; y++) {
        console.log("pong");
    }
}
*/

/*
const valores = [4,9,2,1,3,8,7];
const resultado = [];
for (let x = 2; x <=4; x++) {
    const y = valores[x];
    resultado.push(y);
}
console.log(resultado);
*/

/*
const opciones = {primera: 33, segunda: 21, tercero: 48};
let var1 = 99;
let var2 = 1;
if (var1 > var2) { // se queda en este if, pero No imprime nada
    if (var1 % 2 !==0 && var2 % 2 ===0) { // var2 no es divisible entre 2
        console.log(opciones.primera);
    }else if(var2 > var1) {
        if(var1% 2 !==0 && var2 % 2 !==0) {
            console.log(opciones.segunda);
        }
    }
}
*/

/*
const posicion = "segundo";
const x = valores.segundo === valores[posicion];
console.log(x);
*/

/*
const valores = {primero: 33, segundo: 21, tercero: 48};
const posicion = "segundo";
const x = valores.segundo === valores[posicion];
console.log(x);
*/

/*
const valores = {primero: 33, segundo: 21, tercero: 48};
const x = valores.segundo;
console.log(x);
*/

/*
const valores = [4,9,2,1,3,8,7];
const x = valores[6];
console.log(x);
*/


