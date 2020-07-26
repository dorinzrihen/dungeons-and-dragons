
const input = require('readline-sync');

let arr = [];
let lenNumber = input.questionInt("Enter the length of the array you want ");

for (let i = 0; i< lenNumber; i++){
    arr.push(Math.floor(Math.random() * 50)+1);
}

console.log("max index is ",arr.indexOf(Math.max(...arr)));
console.log("min index is ",arr.indexOf(Math.min(...arr)));
