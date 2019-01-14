/*
============================================
; Title:  Assignment 5.4
; Author: William Thomason
; Date:   9 January 2019
; Description: Filtering/Reducing Complex Data Structures
;===========================================
*/

//HEADER
const header = require('../thomason-header.js');
console.log(header.display("William", "Thomason", "Assignment 5.4") + "\n");


//arry of composers
var composers= [
  {
      lastName:'Beethoven',
      genre:'Classical',
      rating:8,

  },

  {
      lastName:'Mozart',
      genre:'Classical',
      rating:10,
  },

  {
      lastName:"Bach",
      genre:"Classical",
      rating:9,
  },
  {
      lastName:"Hayden",
      genre:"Classical",
      rating:6,
  },
  {
      lastName:"Schubert",
      genre:"Classical",
      rating:5,
  }
]

//creating new filtered arrays with the map methods
var genre = composers.map(function(composer){
return "Genre: "+ composer.genre + "\n" + "LastName: "+ composer.lastName;

})

var rating = composers.map(function(composer){
  return "Rating: "+ composer.rating + "\n" + "LastName: "+ composer.lastName;

  })

//outputting the new arrays with the forEach() method

console.log("--COMPOSER BY RATING--")

rating.forEach(function(y){
  console.log(y + "\n")
  })


console.log("--COMPOSER BY GENRE--")
genre.forEach(function(y){
console.log(y + "\n")
})

//END PROGRAM
