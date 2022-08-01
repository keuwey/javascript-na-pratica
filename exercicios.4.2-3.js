function multipy(values){
    let newData = [];
    valuesLength = values.length - 1;
    for (let i = 0; i < valuesLength; i++){
        newData.push(values[i] * values[i+1]);
    }
    newData.push(values[valuesLength] * 2);
    return newData;
}
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27, 33, 0, 1, 21];
let newData = multipy(numbers);
console.log(newData);