const input = require('readline-sync');

//one player or vs computer
let name 
let amount = 50
let oneCard
let secondCard
let bet
let finishPlay = false
let round = 1

//two players extension
let name2 
let amount2 = 50
let totalOfferLimit
let symbolOption =["♠","♣","♥","♦"]
let symbolCard1;
let symbolCard2;

let pick = input.keyInSelect(["Play aginst computer","Play aginst friend"], 'Ready to fight?');
if (pick === 0) playWithComputer();
else if(pick === 1) play1V1();

//VS computer
function playWithComputer(){
    console.log(`~~~~~~~~~ Welcome To War ~~~~~~~~~`);
    name = input.question(`please enter your name: `);
    while(!finishPlay){
        console.log(`~~~~~ Round ${round} ~~~~~`);
        bet = input.questionInt(`Hello ${name} You currently have ${amount} dollars.\nPlace your bet for the next round: 1 to ${amount} `);
        if(bet<=amount && bet>0){
            consoleSeparate();
            randomCard();
            while(oneCard === secondCard){
                randomCard();
            }
            console.log("my card:  ",oneCard,"your card:  ", secondCard);
            consoleSeparate();
            //user lose
            if(oneCard>secondCard){
                amount -= bet;
                if (amount === 0){
                    console.log(`you lost ${bet} and now you have 0 \nyou are broke... Bye Bye`);
                    finishPlay = true;
                }
                else
                {
                    let choice = input.questionInt(`You lost ${bet}!! And now you have ${amount} \nWhat would you like to do? \n1. Play another round \n2. leave with my money`);
                    while(choice !== 1 && choice !== 2){
                        console.log(`valid input, please`);
                        choice = input.questionInt(`What would you like to do? \n1. Play another round \n2. leave with my money`);
                    }
                    if (choice === 2){
                        console.log(`You've earned ${amount} \nDon't want another round? Bye.`);
                        finishPlay = true;
                    }
                }
            }
            //user win
            else{
                amount += bet;
                let choice = input.questionInt(`You Won ${bet}!! And now you have ${amount} \nWhat would you like to do? \n1. Play another round \n2. leave with my money`);
                while(choice !== 1 && choice !== 2){
                    console.log(`valid input, please`);
                    choice = input.questionInt(`What would you like to do? \n1. Play another round \n2. leave with my money`);
                }
                if (choice === 2){
                    console.log(`You've earned ${amount} \nDon't want another round? Bye.`);
                    finishPlay = true;
                }
            }
        }
        else{
            console.log(`i said between 1 to ${amount} And you typed ${bet}!!!\nI don't play with liars!!! Bye`);
            finishPlay = true;
        }
        round ++;
    }
}

function play1V1(){
    console.log(`~~~~~~~~~ Welcome To War 1V1 ~~~~~~~~~`);
    name = input.question(`please enter first player name: `);
    name2 = input.question(`please enter second player name: `);
    while(!finishPlay){
        console.log(`~~~~~ Round ${round} ~~~~~`);

        if(amount2 >= amount) totalOfferLimit = amount;
        else totalOfferLimit = amount2;

        bet = input.questionInt(`Hello ${name} You currently have ${amount} dollars. \nAnd Hello ${name2} You currently have ${amount2} dollars. \nPlace your bet for the next round: 1 to ${totalOfferLimit} `);
        if((bet<=totalOfferLimit && bet>0) && (bet<=totalOfferLimit && bet>0)){
            consoleSeparate();
            randomCard(true);
            while(oneCard === secondCard){
                randomCard(true);
            }
            console.log(`${name} card: ${oneCard}${symbolCard1}. ${name2} card: ${secondCard}${symbolCard2}`);
            consoleSeparate();
            //Player1 won
            if(oneCard>secondCard){
                amount += bet;
                amount2 -= bet;
                //player2 out.
                if (amount2 === 0){
                    console.log(`${name2} lost ${bet} and now you have 0 \nyou are broke and ${name} is the Winner`);
                    finishPlay = true;
                }
                else
                {
                    let choice = input.questionInt(`${name2} You lost ${bet}!! And now you have ${amount2}\n${name} Won and now have ${amount} \nWhat would you like to do? \n1. Play another round \n2. leave with my money`);
                    while(choice !== 1 && choice !== 2){
                        console.log(`valid input, please`);
                        choice = input.questionInt(`What would you like to do? \n1. Play another round \n2. leave with my money`);
                    }
                    if (choice === 2){
                        console.log(`${name} have ${amount} and ${name2} have ${amount2}\nDon't want another round? Bye.`);
                        finishPlay = true;
                    }
                }
            }
            //player2 win
            else{
                amount -= bet;
                amount2 += bet;
                //player1 out.
                if (amount === 0){
                    console.log(`${name} lost ${bet} and now you have 0 \nyou are broke and ${name2} is the Winner`);
                    finishPlay = true;
                }
                else
                {
                    let choice = input.questionInt(`${name} You lost ${bet}!! And now you have ${amount}\n${name2} Won and now have ${amount2} \nWhat would you like to do? \n1. Play another round \n2. leave with my money`);
                    while(choice !== 1 && choice !== 2){
                        console.log(`valid input, please`);
                        choice = input.questionInt(`What would you like to do? \n1. Play another round \n2. leave with my money`);
                    }
                    if (choice === 2){
                        console.log(`${name} have ${amount} and ${name2} have ${amount2}\nDon't want another round? Bye.`);
                        finishPlay = true;
                    }
                }
            }         
            
        }
        else{
            console.log(`i said between 1 to ${totalOfferLimit} And you typed ${bet}!!!\nDo I look stupid to you?!?! Bye`);
            finishPlay = true;
        }
        round ++;
    }
}

function randomCard(symbol = false){
    oneCard = Math.floor(Math.random() * 12)+1;  
    secondCard = Math.floor(Math.random() * 12)+1;  
    if (symbol){
        symbolCard1 = symbolOption[Math.floor(Math.random() * symbolOption.length)];
        symbolCard2 = symbolOption[Math.floor(Math.random() * symbolOption.length)];
    }
}

function consoleSeparate(){
    console.log("~~~~~~~~♠~♣~♥~♦~~~~~~~~");
}
