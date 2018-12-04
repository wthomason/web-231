/*
============================================
; Title:  Assignment 1.5
; Author: Albert Einstein
; Date:   25 June 2017
; Modified By: William Tyson Thomason
; Description: This program demonstrates the
;   use of JavaScript types, values, and 
;   and variables in an application.
;===========================================
*/ 

/*
    The code below builds a properly formatted
    header and must be included in all applications
    you write. In subsequent week's we will build this
    functionality into a function and place it in a separate file.
*/

var myFirstName = "Albert";
var myLastName = "Einstein";
var todaysDate = new Date().toLocaleDateString();
var assignmentNum = "Assignment 1.5";

var programHeader = "\n" + myFirstName + " " + myLastName + "\n"
    + assignmentNum + "\nDate: " + todaysDate;

console.log(programHeader);
console.log("\n"); 

// start of program - your code goes below this line
var firstName = "william";
var middleName = "Tyson";
var lastName = "Thomason";
var street = "1112 63rd Street";
var city = "Des Moines";
var state = "IA";
var zip = "50315";
var payRate = 12.75;
var dplaces = payRate == parseInt(payRate, 10) ? 0 : 2;
payRate = '$' + payRate.toFixed(dplaces);
var hireDate = new Date(2017, 6, 12).toLocaleDateString();


var employee = "\nEmployee" + "\nFirst Name: " + firstName + "\nMiddle Name: " + middleName +  "\nLast Name: " + lastName + "\nAdress: "
    + street + " " + city + ", " + state + " " + zip + "\nPay Rate: " + payRate +  "\nHire Date: " + hireDate;

console.log(employee);



// end of program