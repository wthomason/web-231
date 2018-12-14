/*
============================================
; Title:  thomason-exercise-3.2.js
; Author: William T. Thomason
; Date:   13 December 2018
; Modified By:
; Description: Tests variables to see if they match
;===========================================
*/

// require thomason-header.js file
var header = require('../thomason-header.js');

// Output of header.display function that accepts first name, last name, assignment name
console.log(header.display("William", "Thomason", "Exercise 3.2"));


//VARIABLES
var testVariable1 = "Truck";
var testVariable2 = "Car";
var testVariable3 = "Bike";
var testVariable4 = "Bike";
var testVariable5 = "Four";
var testVariable6 = "Three";

//FUNCTIONS
function match(argument1, argument2){
  if(argument1 === argument2){
    return true;
  }
  else{
    return false;
  }
}

function logMismatch(argument1, argument2){
  console.log(argument1 + " and " + argument2 + " do not match!");
}

function logMatch(argument1, argument2){
  console.log(argument1 + " and " + argument2 + " do match!");
}


//TRUE OR FALSE OUTPUT FOR MATCH()
console.log("\n");
console.log(match("A", "B"));
console.log(match(2, 2));


//CONDITIONAL IF ELSE STATEMENT

//TEST FOR VARIABLES 1 & 2
if(match(testVariable1, testVariable2)){
  logMatch(testVariable1, testVariable2);
}
else{
  logMismatch(testVariable1, testVariable2);
}

//TEST FOR VARIABLES 3 & 4
if(match(testVariable3, testVariable4)){
  logMatch(testVariable3, testVariable4);
}
else{
  logMismatch(testVariable3, testVariable4);
}

//TEST FOR VARIABLES 5 & 6
if(match(testVariable5, testVariable6)){
  logMatch(testVariable5, testVariable6);
}
else{
  logMismatch(testVariable5, testVariable6);
}

//END PROGRAM
