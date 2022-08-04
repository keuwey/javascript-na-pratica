function maior(array){
    let maior = 0;
    for (let x = 0; x < array.length; x++){
        if (array[x] > maior){
            maior = array[x];
        }
        return maior;
    }
}
array = ["niin3idn", "ojwdin", "jwiejiwueioruiweru", "opiu"];
console.log(maior(array));
