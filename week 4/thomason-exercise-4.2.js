/*
============================================
; Title:  Exercise 4.2
; Author: William Thomason
; Date:   17 December 2018
; Description: Arrays
;===========================================
*/

//HEADER
const header = require('../thomason-header.js');
console.log(header.display("William", "Thomason", "Exercise 4.2") + "\n");

//VARIABLES
var fruit = ["Apple", "Orange", "Banana", "Mango", "Pear"];

//FUNCTIONS

function getFruit(fruitType){
  for(var i=0; i < fruitType.length; i++) {
    console.log(fruitType[i]);
  }
}

//OUTPUT

getFruit(fruit);

//END PROGRAM
