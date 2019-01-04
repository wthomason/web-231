/*
Title: sanchez-assignment-4.1.js
Date: 12/17/2018
Author: Gabriel Sanchez
Modified by: William Thomason
Description: Discussion Board, Arrays
*/


/* header disable because is not going to work!
var header = require ('../sanchez-header.js');
console.log(header.display('Gabriel', 'Sanchez', 'Assignment 4.1'));
console.log('\n');
*/

// Function
function dayofWeek(day){
  var d =  new Date();
  var day = d.getDay();
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday','Thursday', 'Friday', 'Saturday'];
  return days[day]
}
// Console log..
console.log('Today is ' + dayofWeek());

//Expected output
// Today is (Day of the week)

// End of the program
