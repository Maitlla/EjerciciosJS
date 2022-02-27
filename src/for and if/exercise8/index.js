// Ejercicio 8
// Imprime en la pantalla las tablas de multiplicar

for (let i = 0; i < 10; i++) {

    for (let j = 0; j < 10; j++) {

        // los dos console.log() son lo mismo
        console.log(`${i}x${j}=${i*j}`);// inserto variables dentro de un string 
                                        // como cadenas de caracteres (texto)

        //console.log(i + "x" + j + " = " + i * j);

    }
}





/*
for (let outer = 1; outer < 10 ; outer++ ) {
    for (let inner = 1; inner < 11; inner++ ){
        console.log(inner + "x" + outer + " = " + inner * outer);
    }
    
} */