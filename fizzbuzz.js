function fizzbuzz(numero){
    if (typeof numero == "number"){
        if (numero % 3 == 0){
            console.log("Fizz");
        }
        else if (numero % 5 == 0){
            console.log("Buzz");
        }
        else if (numero % 3 == 0 && numero % 5 == 0){
            console.log("FizzBuzz");
        }
        else {
            console.log(numero);
        }
    }
    else {
        console.log("Não é um número");
    }
}
fizzbuzz(35);
fizzbuzz(47);
fizzbuzz(15);
fizzbuzz("kevin");