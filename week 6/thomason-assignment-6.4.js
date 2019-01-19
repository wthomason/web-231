/*
  // Below is what I am expecting to see when I run your program - remove this before submitting your work
  // 50% of you will not read this and lose 25% of the awardable points.

  FirstName LastName
  Assignment 6.4
  Today's Date

  Ticket 105 was created on <today' date> and assigned to employee Bob Jones (Programmer I).
*/
/*
============================================
; Title:  Assignment 6.4
; Author: William Thomason
; Date:   16 January 2019
; Description: Exception Handling
;===========================================
*/

//HEADER
const header = require('../thomason-header.js');
console.log(header.display("William", "Thomason", "Assignment 6.4") + "\n");

//VARIABLES

var ticket = {
  id: 105,
  name: "Web Spec",
  dateCreated: new Date().toLocaleDateString('en-US'),
  priority: "High",

  person: {
    id: 152,
    firstName: "Bob",
    lastName: "Jones",
    jobTitle: "Programmer I",
  }
}

//OUTPUT
console.log(ticket.dateCreated);

//END PROGRAM
