const student = {
    nombre: "Xan",
    curso: "IFCT0109",
    notaMedia: 7.2,
    apto: true,
    modulosSuperados: [
        "MF3323",
        "MF4401",
        "MF1200"
    ]
}

// Show object
// Mostarar objeto
console.log(student);

// Show property
// Mostrar propiedad
console.log("Nombre:", student.nombre);

// Change property value
// Cambiar el valor de la propiedad
student.nombre = "María"
console.log(student)

// You can do maths or anything
// Puedes hacer matemáticas o cualquier cosa
student.notaMedia++;
console.log(student);

// Adding new properties
// Agregar nuevas propiedades
student['nacimiento'] = 1982;
console.log(student);

// Accesing arbitrary properties
// Acceso a propiedades arbitrarias
const property = "nacimiento"
console.log(student[property]);

// Has this object a property?
// ¿Tiene este objeto una propiedad?
console.log(student.hasOwnProperty("nacimiento"))
console.log(student.hasOwnProperty("cuentaBancaria"))