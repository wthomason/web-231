/*
============================================
; Title:  thomason-assignment-2.4.js
; Author: William T. Thomason
; Date:   12 December 2018
; Modified By:
; Description:Outputs students in a requested class
;===========================================
*/

/*
Desired output:

Here is the student list for web-321 with a total of 3.
Jason Sullenger
Serena McLaughlin
Tyler Armstrong

or

Sorry, We currently have no student list for the class you requested.

*/

//Variables

var firstClass = [
  "Andrew Hemminger",
  "Donald Cousar",
  "Griselda Balmaceda"
];

var secondClass = [
  "Jason Sullenger",
  "Serena McLaughlin",
  "Tyler Armstrong"
];


//Functions

//takes input when invoked and determines if it matches set criteria. If it does calls function to loop through students if not displays sorry text.
function studenList(className){

  if(className === "web-231"){
    classLoop(firstClass, className);
    return true;
  }
  else if(className === "web-321"){
    classLoop(secondClass, className);
    return true;
  }
  else{
    return console.log("\n" + "Sorry, We currently have no student list for the class you requested.");
  }

}

/*
loops through students in array and outputs them.
Also takes the original input and used to tell user what class they requested as well as how many students are in the class.
*/
function classLoop(classNumber, className){

  var totalStudents = classNumber.length;
  console.log("\n" + "Here is the student list for " + className + " with a total of " + totalStudents + ".")

  for(var i=0; i < classNumber.length; i++) {
    console.log(classNumber[i]);
  }

}

//Invoking function with class name and number as a string parameter
studenList("web-231");
