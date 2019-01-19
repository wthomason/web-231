/*
============================================
; Title:  Exercise 6.2
; Author: William Thomason
; Date:   16 January 2019
; Description: Exception Handling
;===========================================
*/

//HEADER
const header = require('../thomason-header.js');
console.log(header.display("William", "Thomason", "Exercise 6.2") + "\n");

try {

  //Set the x variable to a specified number
  var x = 199;

  //If the number is less than 200 will throw error. If greater than 200 will console.log string
if (x < 200) throw "Number is less than 200.";

  console.log("Your Number is: " + x);

} catch (err) {

  console.log("Catch clause: " + err);

} finally {

  console.log("Finally clause reached...");

}
