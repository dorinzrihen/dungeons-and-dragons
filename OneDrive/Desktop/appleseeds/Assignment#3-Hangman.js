const figlet = require('figlet');
const input = require('readline-sync');

const wordsStock = ['reckless','development','quiet','ministry','angle','sick','guide','gossip','division','rehabilitation','makeup'];
let myWord = wordsStock[Math.floor(Math.random() * wordsStock.length)];
let guessesNum = 10;

let hiddenWord = "*".repeat(myWord.length);
let winner = false;

//Cool title
console.log(figlet.textSync('hanged-Man', {
    font: 'Standard',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 80,
    whitespaceBreak: true
}));


while (guessesNum>0 && winner === false){
    console.log(`you have ${guessesNum} quesses`);
    console.log(`the word is:`);
    console.log(hiddenWord);
    let option = input.question('What is your guess? ', {limit: /([a-zA-Z])/g});
    checkOption(option);
    //check if now the word is similar
    if (myWord === hiddenWord){
        console.log("Wow, you are good!!!");
        winner = true;
    }
    else if(guessesNum === 0){
        console.log("maybe next time :)");
    }
}


//Checks if the letter exists in the sentence, work with words too
function checkOption(guess){
    let listWord = myWord.split('');
    let listHiddenWord = hiddenWord.split('');
    let findIt = false;

    if (guess === myWord && quess.length > 1){
        hiddenWord = myWord;
        findIt = true;
    }
    else{
        for(let i in listWord){
            if (guess === listWord[i]){
                listHiddenWord[i] = listWord[i];
                findIt = true;
                hiddenWord = listHiddenWord.join('');
            }
         }
    }
    if(findIt !== true) guessesNum --;
}