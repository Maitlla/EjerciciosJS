// Ejercicio 6
// Separa los números y los strings contenidos en el array mix

const mix = [undefined,22,"1",4,3,"5",7,NaN,8,"9","12",11,null];
const strings = [];
const numbers = [];

for (let item of mix) {
    if (typeof(item) === "string") {
        strings.push(item);

    }else if(typeof(item) === "number") {
        numbers.push(item);
    }
}

console.log("Strings:",strings,"Numbers:",numbers)



