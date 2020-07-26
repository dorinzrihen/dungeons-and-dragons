const input = require('readline-sync');

let myNumber = -1;
while(myNumber<0){
    myNumber = input.questionInt("please enter a positive number ");
};
//the minimus value is 1 
let nCalculate = 1 ;
for (let i = 1;i<=myNumber;i++){
    nCalculate *=i;
};
console.log(nCalculate);