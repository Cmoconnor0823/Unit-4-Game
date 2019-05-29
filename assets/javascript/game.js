//This is set undefined to capture the computer's guess may be extra could create var when creating value
//var compGuess;

var wins = 0;
var losses = 0;
/*create 4 different undefined 
variables linked to the button clicks*/
var randomNumArr = [];//this array correctly has 4 number values
var bttnOne;
console.log(bttnOne,"bttnOne")
var bttnTwo;
var bttnThree;
var bttnFour;
/* create variable to hold the total value of 
the user's button cicks*/
var userClick;


//var to print to HTML
var winText = document.getElementById("win-text");
var lossesText = document.getElementById("losses-text");
var compChoice = document.getElementById ("comp-choice");


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


//code to capture user button clicks and add number to user guess


//code to compare button clicks to computer guess

//if win statement

//if continue game

//if loss

//record win or loss then restart game with new 
// randomly chosen values for both the comp
// and the buttons