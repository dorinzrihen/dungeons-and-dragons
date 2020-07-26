function num_to_str(num){
    let string_numbers =["ZERO","ONE","TWO","TREE","FOUR","FIVE","SIX","SEVEN","EIGHT","NINE"];
    console.log(string_numbers[Number(num)]);
}

const input = require('readline-sync');
var num = input.question("Enter your number ");

num_to_str(num);