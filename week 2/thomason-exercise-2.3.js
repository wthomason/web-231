/*
============================================
; Title:  thomason-exercise-2.3.js
; Author: William T. Thomason 
; Date:   4 December 2018
; Modified By: William T. Thomason
; Description: Displays a formatted header
;===========================================
*/

// require thomason-header.js file
var header = require('../thomason-header.js');

// Output of header.display function that accepts first name, last name, assignment name
console.log(header.display("William", "Thomason", "Exercise 2.3"));


/*
  Expected output:

  FirstName LastName
  Exercise 2.3
  Today's Date

  Hello FirstName LastName!

  Hint: Use your personal header display function and
  refer to page 178 for implementing function properties
*/

// Function Property 
myName.william = "William Thomason"


// function
function myName(){
    return myName.william;
}

// Output 
console.log('\n');
console.log("Hello " + myName() + "!");


// End of file