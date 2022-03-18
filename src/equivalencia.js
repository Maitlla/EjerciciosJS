
// El método sort() ordena los elementos de un Array y lo devuelve ordenado 
const numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  // para que lo ordene correctamente de manera ascendente
  // si a es menor que b return -1
  // si a es mayor que b return 1
  // si a es igual que b return 0
  return a - b; 
});
console.log(numbers);

// Ejemplo método sort() con función anónima normal
const numbers1 = [ 40, 1, 5, 200 ];
numbers1.sort(function(a,b){return a - b;});
console.log(numbers1);  // [ 1, 5, 40, 200 ]

// Ejemplo método sort() con función flecha
const numbers2 = [ 40, 1, 5, 200 ];
numbers2.sort((a,b)=>a-b);  
console.log(numbers2); // [ 1, 5, 40, 200 ]


const obj = {
    nombre: "Fred",
    edad: 42,
    id: 1
  }
  
  //Los dos fragmentos de código son equivalentes
  const { nombre } = obj;
  console.log("nombre", nombre);
  
  //asignación de múltiples variables a la vez
  const { edad, id } = obj;
  console.log("edad", edad);
  console.log("id", id);
  
  //usando diferentes nombres para las propiedades
  const { nombre: personNombre } = obj;
  console.log("personNombre", personNombre);


  //funciones de ES6 destructuring assignment
  const obj = {
    email: "hello@gmail.com",
    title: "Hello world"
}

const email = obj.email;
const title = obj.title;

const { email,title } = obj;


//otro ejemplo
const obj = {
    prop1: 1,
    prop2: 2
  }
  
  // previamente se tendría que hacer algo como esto:
  const firstProp = obj.prop1;
  const secondProp = obj.prop2;
  console.log(firstProp, secondProp);
  // etc.
  
  // sin embargo, ahora se puede hacer esto en la misma línea:
  const {prop1, prop2} = obj;
  console.log(prop1, prop2);



