/*
============================================
; Title:  thomason-assignment-2.4.js
; Author: William T. Thomason 
; Date:   5 December 2018
; Modified By: William T. Thomason
; Description: Displays a formatted header
;===========================================
*/

// require thomason-header.js file
var header = require('../thomason-header.js');

// Output of header.display function that accepts first name, last name, assignment name
console.log(header.display("William", "Thomason", "Assignment 2.4") + "\n");


/*
FUNCTIONS START HERE
*/

//function returns first and last name with a space between the two.
function fullName(firstName, lastName){
  return  firstName + " " + lastName;
}

/*
takes in year, month and day parameters (for todays date pag the new Date().getFullYear(), new Date().getMonth(), new Date().getDate()) returns them with the .toLocalDateString 
format
*/
function dateWriter(year, month, day){
  return new Date(year, month, day).toLocaleDateString('en-US');
}

//Takes in a number and how many positons you want it to be in and outputs the number in the desired fixed position
function formatNumber(number, numOfFixedPositions){
 return number.toFixed(numOfFixedPositions);
}

// takes a string value and uses parseInt on the string parameter and return the value as an integer
function convertToInt(string){
  return parseInt(string);
}

// Parse the string parameter and return the value as a parseFloat and formated with a $ sign
function convertToFloat(string){
  return "$" + parseFloat(string);
}

//OUTPUT STARTS HERE
console.log("Hello my name is " + fullName("william", "Thomason") + "!" + "\n");

console.log("Today's date is " + dateWriter(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()) + " and the current temperature is 33.5 degrees." + "\n");

console.log("I am " + convertToInt("32") + " years old and my savings account goal is " + convertToFloat("500.32") + " dollars.\n");

// Test console.log for the formatNumber function
//console.log(formatNumber(32, 2));
