/*
============================================
; Title:  Exercise 5.3
; Author: William Thomason
; Date:   9 January 2019
; Description: Object Collections
;===========================================
*/

//HEADER
const header = require('../thomason-header.js');
console.log(header.display("William", "Thomason", "Exercise 5.3") + "\n");

//VARIABLES
var composerList  = [

  {

  firstName: 'Ludwig',

  lastName: 'Beethoven',

  genre: 'Classical',

  rating: 7,

  },

  {

  firstName: 'Wolfgang',

  lastName: 'Mozart',

  genre: 'Classical',

  rating: 4,

  },

  {

  firstName: 'Johann',

  lastName: 'Bach',

  genre: 'Classical',

  rating: 9,

  },

  {

  firstName: 'Joseph',

  lastName: 'Haydn',

  genre: 'Classical',

  rating: 6,

  },

  {

  firstName: 'Franz',

  lastName: 'Schubert',

  genre: 'Classical',

  rating: 8,

  },

  ];

  //OUTPUT
console.log("-- COMPOSERS --");
composerList.forEach(function(composer){
  console.log("First Name: " + composer.firstName + ", " + "Last Name: " + composer.lastName + ", " + "Genre: " + composer.genre + ", " + "Rating: " + composer.rating);
});

  //END PROGRAM
