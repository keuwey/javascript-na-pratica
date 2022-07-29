let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impar = 0;
for (let x = 1; x < numbers.length; x++){
    if (numbers[x] % 2 > 0){
        impar += 1
    }
}
if (impar > 0){
    console.log(`Existem ${impar} números ímpares`);
}
else {
    console.log("Não existem números ímpares");
}

// impares 3, 5, 19, 35, 27