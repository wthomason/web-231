/*
============================================
; Title:  Assignment 3.4
; Author: William Thomason
; Date:   13 December 2018
; Description: loops and if/else statements
;===========================================
*/


const header = require('../thomason-header.js');

console.log(header.display("William", "Thomason", "Assignment 3.4"));


 // Disclaimer: Do not remove this function as this is what you will be using to generate a random number

function randomNumber() {
  return Math.floor((Math.random() * 10) + 1)
}

// Variables defined here
var exampleVar= 4;


// Functions now defined
function match (firstParam, secondParam) {
  if (firstParam === secondParam)
    return true;
  else
    return false;
};

function logMismatch (mismatchFirstParam, mismatchSecondParam) {
  console.log(mismatchFirstParam + " does not match " + mismatchSecondParam + "!");
};

function logMatch (matchFirstParam, matchSecondParam) {
  console.log(matchFirstParam + " does match " + matchSecondParam + "!");
};


// Console logs title of game
console.log("\n-- DO THE NUMBERS MATCH GAME --");


// For loop testing match against a random number
for (var x = 0; x < 10; x++) {
  var randomVar = randomNumber();
  if (match (exampleVar, randomVar)){
    logMatch(exampleVar, randomVar);
  } else {
    logMismatch(exampleVar, randomVar);
  };
};



//End Program
