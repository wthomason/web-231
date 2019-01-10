/*
============================================
; Title:  Discussion 5.1
; Author: William Thomason
; Date:   9 January 2019
; Description: Built in Functions
;===========================================
*/

//HEADER
const header = require('../thomason-header.js');
console.log(header.display("William", "Thomason", "Discussion 5.1") + "\n");


//VARIABLES
var carList = [

  {

  year: '1964',

  make: 'Chevy',

  model: 'Impala',

  },

  {

    year: '1981',

    make: 'DMC',

    model: 'Delorean',

  },

  {

    year: '1989',

    make: 'Porsche',

    model: '911',

  }

  {

    year: '1966',

    make: 'Chevy'

    model: 'Camaro',

  },

  {

    year: '1934'

    make: 'Bugatti',

    model: 'Type 57',

  },

  ];


//OUTPUT
console.log("-- Classic Cars List --")
carList.forEach(function(car){
  console.log("Year: " + cars.year + ", " + "Make: " + car.make + ", " + "Model: " + car.model);
});

//END PROGRAM
