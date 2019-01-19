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
console.log("Ticket " + ticket.id + " was created on " + ticket.dateCreated + " and assigned to employee " + ticket.person.firstName + " " + ticket.person.lastName + " (" + ticket.person.jobTitle + ").");

//END PROGRAM
