//defines prompt for user to input answer
let prompt = require(`prompt-sync`)();

//defines price and optional items to purchase
let price = 0;
let shoes, backpack, skiJacket, pants;

//Travel planner lists choices
console.log("========== Travel Planner ==========");
console.log("You have a choice of two travel destinations for Spring Break:");
console.log("\tTouring the National Parks");
console.log("\tSkiing in Colorado\n");

//lists prices of both options
console.log("===== Basic Airfare and Hotel =====");
console.log("Touring the National Parks: $1,054.00");
console.log("Skiing in Colorado: $1,105.00");
console.log(" ");
console.log("Please include up to $400 for accessories when planning your vacation budget.")

//user defines budget
let budget = prompt('What is your budget for your vacation? ');
console.log(" ");

//user selects option
console.log("Where do you plan to travel for Spring Break?");
console.log("Select one of the following: ");
console.log("[T]ouring in the national parks in Wyoming");
console.log("[S]kiing in Colorado");
let choice = prompt('Enter your choice: ');

//calls function
choiceSelection();

//function to find choices and total price
function choiceSelection() {
    let validInput = false
    while (validInput === false) {
        if (choice === "t" || choice === "T") {
            price += 1054;
            validInput = true;
            shoes = prompt('Do you need hiking shoes? (y/n) ');
            if (shoes === "y") {
                price += 75;}
            backpack = prompt('Do you need a backpack? (y/n) ');
            if (backpack === "y") {
                price += 40;}
        }
        else if (choice === "s" || choice === "S") {
            price += 1105;
            validInput = true;
            skiJacket = prompt('Do you need a ski jacket? (y/n) ');
            if (skiJacket === "y") {
                price += 325;}
            pants = prompt('Do you need pants? (y/n) ');
            if (pants === "y") {
                price += 150;
            }
        } else {
            choice = prompt('Invalid option. Enter your choice: ');
        }
    }
}

//displays total price by calling function
console.log("****************************************");
console.log("       Costs for Spring Break");
totalPrice();

//function to determine price determined by user's choices
function totalPrice() {
    if (choice === "t" || choice === "T") {
        console.log("Touring the National Parks")
        console.log("Hotel for four nights:         $400.00");
        console.log("Airfare to Wyoming:            $646.00");
        if (shoes === "y" || shoes === "Y") {
            console.log("Item: Hiking shoes             $75.00")
        }
        if (backpack === "y" || backpack === "Y"){
            console.log("Item: Backpack                 $40.00")
        }
    }
    else if (choice === "s" || choice === "S") {
        console.log("Skiing in Colorado")
        console.log("Hotel for four nights:         $800.00");
        console.log("Airfare to Colorado:           $305.00");
        if (skiJacket === "y" || skiJacket === "Y"){
        console.log("Item: Ski Jacket               $325.00" );}
        if (pants === "y" || pants === "Y") {
        console.log("Item: Ski Pants                $150.00");}
        console.log("========================================")
    }
//finds whether the budget is greater than, equal to, or less than price
    budgetCalculation();
}
function budgetCalculation() {
    if (budget >= price) {
        console.log(`Total:                         $${price}`);
        console.log();
        console.log('Great! Enjoy your vacation!');
    }
    else if (budget < price) {
        console.log(`Total:                         $${price}`);
        console.log();
        console.log('You are over budget. Enjoy your stay-cation');
    }
}