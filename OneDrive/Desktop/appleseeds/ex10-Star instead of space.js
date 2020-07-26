const input = require('readline-sync');

let str = input.question("give me a string please ");
console.log(str.replace(/ /g,"*"));
