let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let i = 0;
for (x=0; x<numbers.length; x++){
    i += numbers[x];
}
let media;
media = i / numbers.length;
if (media > 20){
    console.log("Valor maior que 20.");
}
else {
    console.log("Valor menor ou igual a 20.");
}