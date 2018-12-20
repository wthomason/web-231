/*
  // Below is what I am expecting to see when I run your program - remove this before submitting your work
  // 50% of you will not read this and lose 25% of the awardable points.

  FirstName LastName
  Assignment 4.4
  Today's Date

  -- ORIGINAL ARRAY --
  Alabama
  Nebraska
  Iowa
  California
  Nevada

  -- SORTED ARRAY --
  Alabama
  California
  Iowa
  Nebraska
  Nevada

  -- SELECTED VALUE --
  Iowa

*/

/*
============================================
; Title:  Assignment 4.4
; Author: William Thomason
; Date:   17 December 2018
; Description: Arrays
;===========================================
*/

//HEADER
const header = require('../thomason-header.js');
console.log(header.display("William", "Thomason", "Assignment 4.4") + "\n");

//VARIABLES

var states = ["Alabama", "Nebraska", "Iowa", "California", "Nevada"];

//FUNCTIONS

function getState(pram1, pram2){
  if(pram1 === pram2){
    return true;
  }
}

function loopArray(arr){
  for(var i=0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

//OUTPUT

console.log("\n-- ORIGINAL ARRAY --");
loopArray(states);

console.log("\n-- SORTED ARRAY --");
loopArray(states.sort());

console.log("\n-- SELECTED VALUE --");

//END PROGRAM
