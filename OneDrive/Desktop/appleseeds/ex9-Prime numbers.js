const input = require('readline-sync');

let n = input.questionInt("please enter a number ");

for (let index = 1; index <= n; index++){
    let isPrime = false;
    for(let i = 2 ;i < index ;i++){
        if (index%i === 0){
            isPrime = true;
            i = index+1;
        }
    }
    if (!isPrime && index !==1){
        console.log(index);
    }
}