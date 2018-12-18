/*
============================================
; Title:  Exercise 4.3
; Author: William Thomason
; Date:   17 December 2018
; Description: Arrays selected value
;===========================================
*/

//HEADER
const header = require('../thomason-header.js');
console.log(header.display("William", "Thomason", "Exercise 4.3") + "\n");

//VARIABLES
var transportType = ["Car", "Truck", "Motorcycle", "Airplane", "Bus"];

//FUNCTION

function getValue(arr, val){
  for(var i=0; i < arr.length; i++) {
    if(arr[i] === val){
      console.log(arr[i]);
    }
  }
}

function getArray(arr){
  for(var i=0; i < arr.length; i++) {
   console.log(arr[i]);
  }
}

//OUTPUT

console.log("-- DISPLAYING ARRAY ITEMS --");
getArray(transportType);

console.log("\n-- SELECTED VALUE --");
getValue(transportType, "Motorcycle");

console.log("\n-- SELECTED VALUE --");
getValue(transportType, "Bus");

//END PROGRAM
