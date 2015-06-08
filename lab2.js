/*********************************************************
LAB 2: LOOPY SCI-FI

Welcome to Lab 2 =)

Be sure to read all the comments!

All of the instructions are inline with the assignment below.
Look for the word TODO in comments.  Each TODO will have a
description of what is required.

To run this file (in the terminal) use: node lab2.js

*********************************************************/
// SETUP
//*********************************************************

// We're going to use this special assert method again to
// test our code
function assert(expression, failureMessage) {
  if (!expression) {
    console.log("assertion failure: ", failureMessage);
  }
}

//*********************************************************
// PROBLEM 1: The Blob. 20 points
//*********************************************************

/* Dowington, PA had 1000 citizens on the night the blob escaped
 its meteorite. At first, the blob could only find and consume
 Pennsylvanians at a rate of 1/hour. However, each time it digested
 someone, it became faster and stronger: adding to its consumption
 rate by 1 person/hour.

 persons consumed  |  rate of consumption
 ------------------|---------------------
        0          |       1/hour
        1          |       2/hour
        2          |       3/hour
        3          |       4/hour

 TODO: First, make a constructor function, called Blob, that makes blobs.

 TODO: Next, create an instance of Blob named blob.

 TODO: Then, use a loop to calculate how long it took the blob to finish
 with Dowington.
*/

function Blob() {
}

var blob = new Blob();

var population = 1000;
var eatingRate = 1;
var hours = 0;
var hoursToEat = 0;

Blob.prototype.consumptionRate = function() {
  while (population > 0) {
    population = population - eatingRate;
    eatingRate += 1;
    hours += 1;
  }
   return hours;
};

var hoursSpentInDowington = blob.consumptionRate(); // TODO: assign me the value of the
                           // above calculation

// Now, write a method that takes a population for an arbitrary
// town, and the starting consumption rate, and returns the number
// of hours the blob needs to ooze its way through that town.

Blob.prototype.hoursToOoze = function(population, peoplePerHour) {
  // TODO: implement me based on the instructions above. Be sure to then assign me to the Blob's prototype.
  var pop = population;
  var hoursToEat = 0;
  while (pop > 0) {
    pop = pop - peoplePerHour;
    peoplePerHour += 1;
    hoursToEat += 1;
  }
   return hoursToEat;
};

assert(blob.hoursToOoze(0, 1) === 0, "no people means no time needed.");
assert(blob.hoursToOoze(1000, 1) === hoursSpentInDowington,
  "hoursSpentInDowington should match hoursToOoze\"s result for 1000");
// TODO: write three more assertions like the two above, testing out
// the hoursToOoze method.
assert(blob.hoursToOoze(500, 1) === 32, "eating a town half the size of Dowington");
assert(blob.hoursToOoze(1, 1) === 1, "only takes one hour to eat one person");
assert(blob.hoursToOoze(3, 1) === 2, "only takes two hours to eat three people");

//*********************************************************
// PROBLEM 2: Universal Translator. 20 points
//*********************************************************

var hello = {
  klingon: "nuqneH",  // home planet is Qo"noS
  romulan: "Jolan\'tru", // home planet is Romulus
  "federation standard": "hello" // home planet is Earth
};

// TODO: define a constructor that creates objects to represent
// sentient beings. They have a home planet, a language that they
// speak, and method called sayHello.

function SentientBeing (homePlanet, language) {
  // TODO: specify a home planet and a language
  // you'll need to add parameters to this constructor
  this.homePlanet = homePlanet;
  this.language = language;
}

// sb is a SentientBeing object
SentientBeing.prototype.sayHello = function(sb) {
    // TODO: say hello prints out (console.log's) hello in the
    // language of the speaker, but returns it in the language
    // of the listener (the sb parameter above).
    // use the 'hello' object at the beginning of this exercise
    // to do the translating
    console.log(hello[this.language]);
    return hello[sb.language];
    //TODO: put this on the SentientBeing prototype
  };

// TODO: create three SentientBeings, one for each language in the
// 'hello' object above.
var klingon = new SentientBeing("Qo'noS", "klingon"); // TODO: fix me
var romulan = new SentientBeing("Romulus", "romulan"); // TODO: fix me
var human = new SentientBeing("Earth", "federation standard"); // TODO: fix me

assert(human.sayHello(klingon) === "nuqneH", "the klingon should hear nuqneH");

// TODO: write five more assertions, to complete all the possible
// greetings between the three types of sentient beings you created above.
assert(human.sayHello(romulan) === "Jolan\'tru",
  "the romulan should hear Jolan\'tru");
assert(klingon.sayHello(romulan) === "Jolan\'tru",
  "the romulan should hear Jolan\'tru");
assert(klingon.sayHello(human) === "hello",
  "the human should hear hello");
assert(romulan.sayHello(klingon) === "nuqneH",
  "the klingon should hear nuqneH");
assert(romulan.sayHello(human) === "hello",
  "the human should hear hello");
//*********************************************************
// PROBLEM 3: Moar Loops. 20 points.
//
// Implement the following functions. Write at least 3
// assertions for each one
//*********************************************************
function max(array) {
  // TODO: return the largest number in the given array
  return Math.max.apply(Math, array);
}

// TODO: write three more assertions
assert(max([ 1, 3, 2 ]) === 3, "[1,3,2]");
assert(max([ 7, 23, 5, 9, 10 ]) === 23, "[7,23,5,9,10]");
assert(max([ 24, 3, 1 ]) === 24, "[24,3,1]");
assert(max([ 5, 6, 7, 8, 9 ]) === 9, "[5,6,7,8,9]");

function variablify(string) {
  // TODO: you are given a string with several words in it
  // return a corresponding variable name that follows
  // javascript conventions
  // HINT:
  // you might want to use these string methods:
  //  split(), charAt(), toUpperCase()
  // and this array method: join()
  var stringToArray = string.split(" ");
  var newArray = [];
  newArray.push(stringToArray[0]);
  for (var i = 1; i <= stringToArray.length; i++) {
    var charArray = stringToArray[i].split("");
    newArray.push(charArray[0].toUpperCase() /* + rest of word */ );
  }
  var camelCaseString = newArray.join("");
}
// cannot for the life of me figure out how to do this one and get it to work. oh well, will keep trying I guess

// TODO: write three more assertions
assert(variablify("one two three") === "oneTwoThree",
  "variablify(\"one two three\")");
assert(variablify("katherine likes cats") === "katherineLikesCats", "variablify(\"katherine likes cats\")");
assert(variablify("summer sunshine") === "summerSunshine", "variablify(\"summer sunshine\")");
assert(variablify("katherine also likes summer sunshine") === "katherineAlsoLikesSummerSunshine", "variablify(\"katherine also likes summer sunshine\")");
//*********************************************************
// PROBLEM 4: Cleanup: 10 points
// Makes sure this file passes jshint and jscs
//
// ./node_modules/.bin/grunt jshint
// ./node_modules/.bin/grunt jscs
//*********************************************************
