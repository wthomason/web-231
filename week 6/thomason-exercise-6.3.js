/*
============================================
; Title:  Exercise 6.3
; Author: William Thomason
; Date:   16 January 2019
; Description: Object Literals
;===========================================
*/

//HEADER
const header = require('../thomason-header.js');
console.log(header.display("William", "Thomason", "Exercise 6.3") + "\n");

//OBJECT ticket with the id, name and requester
var ticket = {

  id: 165,

  name: "Will Call at booth number 6",

  requester: "William T. Thomason",

};

//OUTPUT
console.log("{id: " + ticket.id, ", name: " + ticket.name + ", requester: " + ticket.requester + "}");

//END PROGRAM
