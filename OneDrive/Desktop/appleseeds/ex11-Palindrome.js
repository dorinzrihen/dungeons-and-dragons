const input = require('readline-sync');

let str = input.question("give me a string please ");

let isPalindrome = true
for (let indexSE = 0; indexSE<str.length; indexSE++){
    let indexES = -1+(str.length-indexSE);
    if (str[indexSE] !== str[indexES]){
        isPalindrome = false;
        break;
    }
}
if(isPalindrome){
    console.log("Palindrome");
}
else{
    console.log("not Palindrome");
}
