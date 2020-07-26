const input = require('readline-sync');

//the food titles
let foodTitle = ["noodles","salads","pizza","sandwiches","hamburger","fish"]

//Recommendations for Kashrut Lemehadrin
let noodles = ["Pasta Factory","Nagisa","Wok a way"]
let salads = ["La tost","Holy bagel"]
let pizza = ["Pizza Agvnia","Pizza loti"]
let sandwiches = ["Mana Shnitzel"]
let hamburger = ["Burgerim","Agadir","Mike burger"]
let fish = ["Laguna","Avi's Restaurant"]

//extension to kosher
function kosherExtension(){
    noodles.push("ATZA Sushi bar", "Chooka");
    salads.push("Bazilicum");
    pizza.push("Pizza FIX","Papa pizza");
    sandwiches.push("Brakha Sandwich Bar","Sandwich Padlon");
    hamburger.push("Red Burger");
    fish.push("Kozina");
}


//extension to kosher non-kosher
function nonKosherExtension(){
    kosherExtension();
    noodles.push("Jappn Jappn", "Giraffe");
    salads.push("Nahmuka","Hazalatia Hifa");
    pizza.push("Phillippe","Fabrica");
    sandwiches.push("Mak Sandwich","Fat-Dog");
    hamburger.push("Burgeranch", "Burger Saloon");
    fish.push("Skobar","Pat-Qua");
}


function sendRecomended(isKosher,lemehadrin,foodTitleChoice){
    if (!isKosher){
        //UTDATE THE LIST with all the information (non Kosher can eat in Lemehadrin)
        nonKosherExtension()
    }
    else if(isKosher){
        //UTDATE THE LIST with all the information (only with kosher and Lemehadrin information)
        kosherExtension()
    }
    switch(foodTitleChoice){
        case -1:
            console.log("ok bye");
            break;
        case 0:
            console.log(noodles);
            break;
        case 1:
            console.log(salads);
            break;
        case 2:
            console.log(pizza);
            break;
        case 3:
            console.log(sandwiches);
            break;
        case 4:
            console.log(hamburger);
            break;
        case 5:
            console.log(fish);
            break;
        default:
            throw new Error("stop execution");
    }
}



let numOfPepole = input.questionInt("How many people are you going with? ");
let isKosher = input.keyInYN("Should it be Kosher?");
if (isKosher ===""){
    throw new Error("stop execution");
}

if (isKosher){
    var lemehadrin = input.keyInYN("should it be Kashrut Lemehadrin?");
    if (lemehadrin ===""){
        throw new Error("stop execution");
    }
}
let foodTitleChoice = input.keyInSelect(foodTitle,"What kind of food do you want?");
sendRecomended(isKosher,lemehadrin,foodTitleChoice);
