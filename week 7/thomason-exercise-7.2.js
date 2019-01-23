/*
  Expected output:
  1 Thomas Edison Software Engineer
  2 Benjamin Franklin Programmer
  3 Nikola Tesla Project Manager
  4 Charles Babbage Product Manager
  5 Alexander Bell Business Analyst
*/

/*
============================================
; Title:  Exercise 7.2
; Author: William Thomason
; Date:   23 January 2019
; Description: Exception Handling
;===========================================
*/

//HEADER
const header = require('../thomason-header.js');
console.log(header.display("William", "Thomason", "Exercise 7.2") + "\n");

//OBJECT CREATED AS A FUNCTION
function Employee(id, firstName, lastName, title) {

  this.id = id;

  this.firstName = firstName;

  this.lastName = lastName;

  this.title = title;

}


var employee = [

  new Employee(1, "William", "Thomason", "CEO"),

  new Employee(2, "Matt", "Winterscheid", "Project manager"),

  new Employee(3, "Stephen", "Scott", "Developer"),

  new Employee(4, "Amber", "Thomason", "Designer"),

  new Employee(5, "Lilly", "Thomason", "Content Writer")

];

//OUTPUT
employee.forEach(function(y){
  console.log(y.id + " " + y.firstName + " " + y.lastName + " " + y.title)
  })