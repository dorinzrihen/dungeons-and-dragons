const input = require('readline-sync');

let str = input.question("give me a string please ");

str =str.replace(/[^a-zA-Z ]/g,"");
let txtArr = str.split(" ");

txtArr.sort(function(a, b){
  return b.length - a.length;
});

console.log(txtArr[0]);