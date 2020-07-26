function make_it_10(number1, number2){
    if ((Number(number1) + Number(number2)) == 10){
        console.log("makes 10");}
    else{
        console.log("nope");}
}

const input = require('readline-sync');
var num1 = input.question("Enter the first number ");
var num2 = input.question("Enter the first number ");

make_it_10(num1,num2)