const input = require('readline-sync');

//Future option if we add more questions
const correctAnswer = 1
const wrongAnswer = 0

//Calculate the result
let score = 0
let quizzCounter = 1

let question1 = {
    "Ross to Rachel":correctAnswer,"Ross to Joey":wrongAnswer,"Monica to Chandler":wrongAnswer,"no one":wrongAnswer,}

let question2 = {
    "0":wrongAnswer,"1":wrongAnswer,"2":wrongAnswer,"3":correctAnswer,}

let question3 = {
    "Princess consuela banana hammock":wrongAnswer,"Regina Phalange":correctAnswer,"Miss Chanandler Bong":wrongAnswer,"Phoebe doesn't have a fake name":wrongAnswer,}

let question4 = {
    "Ross and Rachel":wrongAnswer,"Monica and Chandler":wrongAnswer,"Phoebe and Mike":wrongAnswer,"Rachel and Barry":correctAnswer,}

let question5 = {
    "Chandler in Yemen":wrongAnswer,"OMG":correctAnswer,"There is no Janice in the series":wrongAnswer,"I do not believe":wrongAnswer,}

let questionsTitle = {
    "Who told who: 'we were on a break'?": question1,"How many children Phoebe gave birth?": question2,"What is Phoebe's fake name?":question3,"Who did not marry in the series?":question4,"What Janice says the most?":question5,}
//start message
let startMsg = "Hello! welcome to Friends quiz! \nLet's see how much you know about the series"
//Message after answering the quizz
let highResult = "O-M-G!, You are completely an expert \nYou've probably watched the series more than 10 times";
let normalResult = "You know the series \nBut you have a few more times to watch until you know all the answers";
let lowResult = "I'm not sure if you watched the series. \nMaybe next time you will be more lucky"

function aestheticConsolelog(message,title){
    let tempLen = message.split("\n");
    let symbol = "~"
    let upperSymbol = symbol+title+symbol.repeat((tempLen[tempLen.length-1]).length);
    console.log(upperSymbol);
    console.log(message)
    console.log(symbol.repeat(upperSymbol.length));
};
aestheticConsolelog(startMsg,"START")

for (let question in questionsTitle){

    //insert the option to temp array for keyInSelect option 
    tempOption = Object.keys(questionsTitle[question])
    let option = input.keyInSelect(Object.keys(questionsTitle[question]),aestheticConsolelog(question,("QUESTION"+String(quizzCounter)),{cancel:"END THE QUIZZ"}));
    let thePick = tempOption[option];
    //update the score 
    score += questionsTitle[question][thePick];
    quizzCounter +=1;
};
if (score==5){
    aestheticConsolelog(highResult,"RESULT");}
else if(score<5 && score>=3){
    aestheticConsolelog(normalResult,"RESULT");}
else{
    aestheticConsolelog(lowResult,"RESULT");}

