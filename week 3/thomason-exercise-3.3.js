/*
============================================
; Title:  thomason-exercise-3.3.js
; Author: William T. Thomason
; Date:   12 December 2018
; Modified By:
; Description: Uses switch statement
;===========================================
*/

// require thomason-header.js file
var header = require('../thomason-header.js');

// Output of header.display function that accepts first name, last name, assignment name
console.log(header.display("William", "Thomason", "Exercise 3.3"));



//VARIABLES
let eventKeyCode = 13

//CREATES GAP BETWEEN HEADER AND OUTPUT
console.log("\n");

//SWITCH STATEMENT FOR OUTPUT
switch (eventKeyCode){
  case 13:
    console.log('The enter key was pressed.');
    break;

  case 16:
    console.log('The shift key was pressed.');
    break;

  case 32:
    console.log('The spacebar key was pressed.');
    break;

  case 8:
    console.log('The backspace / delete key was pressed.');
    break;

  default:
    console.log('Unrecognized key.');
    break;
}
