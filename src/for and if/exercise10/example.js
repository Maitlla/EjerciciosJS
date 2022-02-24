const end = 3;
for (let outer = 0; outer < end ; outer++) {
    for (let inner = outer; inner < end; inner++ ){
        console.log(`Outer: ${outer}, Inner: ${inner}`);
    }
}

console.log("\nUsing array length:");
const numbers = [13,12,11,10,9];
for ( let idx = 0; idx < numbers.length; idx++ ) {
    console.log(numbers[idx]);
}

console.log("\nSwith array elements");
const letters = ["a","b"];
let temporal = null;
temporal = letters[0];
letters[0] =  letters[1];
letters[1] = temporal;
console.log(letters)

