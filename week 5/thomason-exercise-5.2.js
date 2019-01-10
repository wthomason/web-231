/*
============================================
; Title:  Exercise 5.2
; Author: William Thomason
; Date:   9 January 2019
; Description: Built in Functions
;===========================================
*/

//HEADER
const header = require('../thomason-header.js');
console.log(header.display("William", "Thomason", "Exercise 5.2") + "\n");


//VARIABLES
var foods = ["Oysters", "Shrimp", "Steak", "Tacos", "Sushi"];

//OUTPUT
foods.forEach(function(food){
  console.log(food);
});

//END PROGRAM
