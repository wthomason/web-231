/*
============================================
; Title:  Discussion 5.1 - Advanced Arrays
; Author: Alan Edwards
; Date:   10 January 2019
; Modified By: N/A
; Description: Arrays.
;===========================================
*/

//const header = require("./edwards-header");

/**
* Params: firstName, lastName, assignment
* Response: output
* Description: Returns a well-formatted string header
*/
//console.log(header.display("Alan", "Edwards", "Assignment 5.1") + "\n");

/*
  Expected output:

  FirstName LastName
  Assignment 5.1
  Today's Date

  -- NFL Playoff Teams --
  Los Angeles is home to the Chargers
  Kansas City is home to the Chiefs
  Indianapolis is home to the Colts
  Dallas is home to the Cowboys
  Philadelphia is home to the Eagles
  New England is home to the Patriots
  Los Angeles is home to the Rams
  New Orleans is home to the Saints
*/
var NFL = new Map();
NFL.set("Los Angeles", "Chargers");
NFL.set("Kansas City", "Chiefs");
NFL.set("Indianapolis ", "Colts");
NFL.set("Dallas", "Cowboys");
NFL.set("Philadelphia", "Eagles");
NFL.set("New England" ,"Patriots");
NFL.set("Los Angeles", "Rams");
NFL.set("New Orleans", "Saints");

// output
console.log("-- NFL Playoff Teams --");
for(var[key, value] of NFL){
console.log(key + " is home to the " + value);
}

//end program
//Line 43 needed a comma between key value pair
//Line 40 needed a semi colon after NFL.set()
