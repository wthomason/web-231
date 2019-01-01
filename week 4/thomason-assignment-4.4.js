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
console.log(states.filter(function(el){
  return getState(el,"Iowa")
})[0]);
//END PROGRAM
