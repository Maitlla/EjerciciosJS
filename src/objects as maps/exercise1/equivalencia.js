
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



