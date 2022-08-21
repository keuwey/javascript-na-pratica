// function fat(number){
//     if (number > 1) return number * fat(number-1); else return 1;
// }
// console.log(fat(8));

function fat(number){
  if (number > 1) {
    return number * fat(number-1)
  }
  else {
    return 1
  }
}
console.log(fat(10))
