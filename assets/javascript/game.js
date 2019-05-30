//This is set undefined to capture the computer's guess may be extra could create var when creating value
//var compGuess;

var wins = 0;
var losses = 0;
/*create 4 different undefined 
variables linked to the button clicks*/
var randomNumArr = [];//this array correctly has 4 number values
/* create variable to hold the total value of 
the user's button cicks*/
var userTotal = 0;


//var to print to HTML
var winText = document.getElementById("win-text");
var lossesText = document.getElementById("losses-text");
var compChoice = document.getElementById ("comp-choice");
var userChoice = document.getElementById ("user-choice");

var restart = function () {
    userTotal = 0;
    userChoice.innerHTML ="Your current guess total is: " + userTotal;
    var compGuess = Math.floor(Math.random() * 101 )+ 19;
    compChoice.innerHTML ="The computer's choice is: " + compGuess;
    for(var i = 0; i < 4 ; i++){
        var randomNum = Math.floor(Math.random() *11) + 1;
        randomNumArr.push(randomNum)
    }

}


// Code to make the computer randomly select a number 
// between 19 and 120.
// check with a console log

var compGuess = Math.floor(Math.random() * 101 )+ 19;
  
  console.log(compGuess, "compGuess")

//make this number print on page load 
//*****bonus load in image as well***
compChoice.innerHTML ="The computer's choice is: " + compGuess;

//Code to generate 4 random values between 1 and 12 
//loop????
for(var i = 0; i < 4 ; i++){
    var randomNum = Math.floor(Math.random() *11) + 1;
    randomNumArr.push(randomNum)
    
}
//this console log lists the last number generated for the array
console.log(randomNum, "randomNum");
//this console log correctly lists 4 random numbers between 1 and 12
console.log(randomNumArr, "randomNumArr")

//code to stick each value to a different button

var bttnOne = randomNumArr[0];
console.log(bttnOne,"bttnOne")
var bttnTwo = randomNumArr[1];
console.log(bttnTwo,"bttnTwo")
var bttnThree = randomNumArr[2];
console.log(bttnThree,"bttnThree")
var bttnFour = randomNumArr[3];
console.log(bttnFour,"bttnFour")

//code to capture user button clicks and add number to user guess
$("#buttonOne").on("click", function(){
    userTotal = userTotal + bttnOne;
    console.log(userTotal, "adding first button")
    gameEvent ();

});

$("#buttonTwo").on("click", function(){
    userTotal = userTotal + bttnTwo;
    console.log(userTotal, "adding second button")
    gameEvent ();
});

$("#buttonThree").on("click", function(){
    userTotal = userTotal + bttnThree;
    console.log(userTotal, "adding third button")
    gameEvent ();

});

$("#buttonFour").on("click", function(){
    userTotal = userTotal + bttnFour;
    console.log(userTotal,"adding fourth button")
    gameEvent ();

});
//code to compare button clicks to computer guess
//if continue game

//using an else if breaks my game thought this was needed to get the restart to work
function gameEvent(){
    
        
    if (userTotal < compGuess)
    userChoice.innerHTML ="Your current guess total is: " + userTotal;
    console.log (userTotal,"userTotal");
    
    //if win
     if (userTotal === compGuess) {
        wins++;
        winText.innerHTML ="Your current win total is: " + wins;
        console.log (wins, "wins");
        restart();
     }
    

//if loss
     if (userTotal > compGuess) {
        losses++;
        lossesText.innerHTML ="Your current loss total is: " + losses;
        console.log (losses, "losses")
        restart();
     }
    
};


//restart game with new 
// randomly chosen values for both the comp
// and the buttons
