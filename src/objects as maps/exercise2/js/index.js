// objects as maps 2
// Crea una función `sort` que ordene los participantes por su tiempo, de la persona más rápida a la más lenta

const chrono = [
    {
        name: "Ana",
        time: 102.01
    },
    {
        name: "Pablo",
        time: 105.82
    },
    {
        name: "Marco",
        time: 100.4
    },
    {
        name: "Luisa",
        time: 103.39
    },
    {
        name: "Pedro",
        time: 109.09
    },
]

// chrono.sort((a, b) => a - b); // método sort() con función flecha

// El método sort() ordena los elementos de un Array y lo devuelve ordenado
// function(a, b) a - b (lo ordena de manera ascendente)     b - a (lo ordena de manera descendente)
chrono.sort(function (a, b) {return a.time - b.time;});
// para cada corredor del Array chrono se llama a su propiedades name y time
for (runner of chrono) {
    console.log(runner.name, runner.time);
}

/* El console.log(runner.name, runner.time) devuelve
Marco 100.4
Ana 102.01
Luisa 103.39
Pablo 105.82
Pedro 109.09  */

function dataToHTMLList(array) { // no se pinta el Html 
    const HTMLElements = array.map(
        (item) => {
            const ul = document.createElement("ul");
            const liName = document.createElement("li");
            const liTime = document.createElement("li");
            ul.append(liName, liTime);
            liName.innerText = item.name;
            liTime.innerText = item.time;
            return ul;
        }
    )
    document.querySelector("#list").append(...HTMLElements);
}


