/**
 * * 3201 - Coding for the Web final - Fall 2021
 * 
 * 
 * ! Section 1: ES6 Classes and Instances: 40 points
 * * Write an ES56 class for a snow ball fight combatant
 * * -Take in parameters for name(string), aiming skill(number between 0 and 1) and hit points(number)
 * * -Make a function in your class for throwing a snowball that takes in:
 * *    -a target(another instance of the snowball fighter)
 * *    -compare a random number(between 0 and 1) to the combatants aiming skill
 * *    -if the snowball hits, remove a hitpoint from the target, use dom manipulation to show the hitpoints of the thrower and the target
 * * 
 * * -create an array and add your fighters to it
 * * -send the array of fighters into the arena function as a parameter
 * * -change the last line of the final else statement to make it show the winners name in an H2 in your HTML
 */

// * use this for the arena
fightPos = 0;
/**
 * 
 * @param {*} fighters  - an array of snowball fight players instances
 */
function arena(fighters){
    let attacker = 0; 
    let defender = 1;
    fightPos==1 ? (attacker=1, defender=0) : 0;
    fighters[attacker].throwSnowBall(fighters[defender]);
    if(fighter1.fPoints>0 && fighter2.fPoints>0){
        fightPos == 1 ? fightPos = 0 : fightPos = 1;
        arena(fighters);
    }else{
        let winnerName;
        fighters[0].fPoints==0? winnerName = fighters[1].fName : winnerName = fighters[0].fName;
        // * change this console log into dom manipulation to show the winners name on screen in an h2 tag
        console.log(`${winnerName} is the winner!`);
    }
}

/**
 * ! Section 2: Currying: 30 points
 * * Create a curried function for creating a house.  Your curried function should return an object containing at least 5 feature of a house.  Examples of house features are number of floors, having a basement, and number of bedrooms.  Use these 3 and add 2 more.
 */

/**
 * ! Section 3: Binding, Calling, and Applying: 30 points
 * * Create an object to go with the function below.  Run the function 3 times, once with bind, once with call, and once with apply. 
 */
function lunchTime(provider, sideOrder){
    let myBody = document.querySelector("body");
    let myLunchDesc = `Hi ${provider}, I would like a ${this.foodType} with ${this.ingredient1} and ${this.ingredient2} and some ${sideOrder} on the side.`;
    let lunchDisplay = document.createElement("p");
    lunchDisplay.innerText = myLunchDesc;
    myBody.append(lunchDisplay);
}