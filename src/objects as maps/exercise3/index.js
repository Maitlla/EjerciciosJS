// objects as maps 3
// Adapta el código para poder ordenar los corredores del array `chrono` del ejercicio anterior

const people = [
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

            //   NO los oredena
function aFasterThanB(runnerA, runnnerB) {
    if (runnerA.time < runnnerB.time) {
        return true;
    }else {
        return false;
    }
    
}

function bFasterThanA(runnerA, runnerB) {
    if (runnerA.time > runnerB.time) {
        return true;
    }else {
        return false;
    }
}

function swap (runnerA, runnerB, array) {
    //let temporal = null;
    temporal = array[runnerA.time];
    array[runnerA.time] = array[runnerB.time];
    array[runnerB.time] = temporal;
}

function sort (comparator, array) {
    for ( let currentIdx = 0 ; currentIdx < array.length-1 ; currentIdx++) {
        for ( let nextIdx = currentIdx+1 ; nextIdx < array.length ; nextIdx++ ) {
            // si el resultado de comparar el indice actual (currentIdx) y el suguiente (nextIdx) es true
            if (comparator(array[currentIdx], array[nextIdx])){ 
                // intercambias las posiciones de currentIdx y nextIdx 
                 swap (currentIdx, nextIdx, array); 
            }
        }
    }
}

sort(aFasterThanB, people);
console.log("Runner de menor a mayor ", JSON.stringify(people));
sort(bFasterThanA, people);
console.log("Runner de mayor a menor ", JSON.stringify(people));

//sort(aFasterThanB, people);
//console.log(people);
//sort(bFasterThanA, people);
//console.log(people);


