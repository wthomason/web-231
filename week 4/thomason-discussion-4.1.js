/*
============================================
; Title:  Discussion 4.1
; Author: William Thomason
; Date:   19 December 2018
; Modified by:
; Description: Array Discussion with errors
;===========================================
*/

/*
; Find and correct two errors in code.
;
; EXPECTED OUTPUT:
;   Hello
;   World
*/

//VARIABLES
var myStringArray = {"Hello","World"};

var arrayLength = myStringArray.length;

//LOOP THROUGH ARRAY
for (var i = 0; i < arrayLength.length; i++) {
    console.log(myStringArray[i]);
    
}