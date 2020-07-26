const input = require('readline-sync');

let str = input.question("give me a string please ");

let vowel = ['a','e','i','o','u','y'];
for(let i in vowel){
    str = str.replace(new RegExp(vowel[i], "g"), vowel[i].toUpperCase());
}
console.log(str);

