const input = require('readline-sync');

console.log("please choose a number larger than 10");
let theValue = input.questionInt("User answer ");
while(theValue<=10){
    console.log("please choose a number LARGER than 10");
    theValue = input.questionInt("User answer ");
}
console.log("Thnx you");