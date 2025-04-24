// ARRAYS
// Ordered collections of values
// *List of comments on IG post
// *Collection of levels in a game
// *Songs in a playlist

// *********************************************************************
// CREATE
// To make an empty array
// let students = [];

// An array of strings
// let colors = ["red", "blue", "green"];

// An array of numbers
// let numbers = [1, 2, 3, 4, 5];

// A mixed array
// let stuff = [true, 68, "cat", null];

// **********************************************************************
// RETURN AN OBJECT IN AN ARRAY
// let colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

// // Arrays have a length
// colors.length; //7

// //Access elements using index:
// colors[0]; //'red'

// colors[6]; //'violet'

// colors[7]; //undefined

// colors[colors.length - 1]; //violet

// **********************************************************************
// CHANGE AN OBJECT IN AN ARRAY
// let shoppingList = ["Cheddar Cheese", "2% Milk"];

// //To change 2% Milk to Whole Milk
// shoppingList[1] = "Whole Milk";

// //To add Ice Cream to the end
// //Only works if array is 2 items long...
// shoppingList[2] = "Ice Cream";

// //To make sure you add to the end, no matter the length of the array:
// shoppingList[shoppingList.length] = "Tomatoes";
// shoppingList[shoppingList.length] = "Potatoes";

// *********************************************************************
// ARRAY METHODS
// Push - add to end
// Pop - remove from end
// Shift - remove from start
// Unshift - add to start

// ADD TO END OF ARRAY
// let animals = ["dog", "cat", "rabbit", "hampster"];
// animals.push("horse");

// REMOVE LAST OBJECT FROM ARRAY
// let animals = ["dog", "cat", "rabbit", "hampster", "horse"];
// animals.pop();

// REMOVE FIRST OBJECT FROM ARRAY
// let animals = ["dog", "cat", "rabbit", "hampster", "horse"];
// animals.shift();

// ADD OBJECT TO FIRST PLACE
// let animals = ["dog", "cat", "rabbit", "hampster", "horse"];
// animals.unshift("goat");

// .push AND .unshift CAN ADD MULTIPLES AT ONCE
// ("fish", "rat", "hampster");

// ********************************************************************
// CONCAT
// let fruits = ["apple", "banana"];
// let veggies = ["asparagus", "brussel sprouts"];
// let meats = ["steak", "chicken breast"];

// console.log(fruits.concat(veggies));
// console.log(veggies.concat(fruits));

// let allFoods = fruits.concat(veggies, meats);

// ********************************************************************
// INCLUDES & INDEXOF
// let ingredients = [
//   "water",
//   "corn starch",
//   "flour",
//   "cheese",
//   "brown sugar",
//   "shrimp",
//   "eel",
//   "butter",
// ];

//includes returns true or false
// if (ingredients.includes("flour")) {
//   console.log("I AM GLUTEN FREE, I CANNOT EAT THAT!");
// }

//indexOf returns an index (or -1 if not found)
// if (ingredients.indexOf('shrimp') !== -1) {
// 	console.log('Sorry, I hate shrimp.');

// **********************************************************************
//REVERSE AN ARRAY

// let letters = ["T", "C", "E", "P", "S", "E", "R"];

//Remember that reverse() mutates the original array.
//It reverses IN PLACE rather than making a copy
// let song = letters.reverse().join(".");
//"R.E.S.P.E.C.T"

// *********************************************************************
// JOIN
// let elements = ["Fire", "Water", "Air"];

// console.log(elements.join(""));
//FireWaterAir
// console.log(elements.join(" "));
// Fire Water Air
// console.log(elements.join("*"));
// Fire*Water*Air
//********************************************************************
// SLICE
// let animals = ["shark", "salmon", "whale", "bear", "lizard", "tortoise"];

// let swimmers = animals.slice(0, 3);
// shark, salmn, whale
// let mammals = animals.slice(2, 4);
//whale, bear

//One option:
// let reptiles = animals.slice(4, 6);

// Another option:
// let reptiles = animals.slice(4);
// lizard, tortoise
// let quadruped = animals.slice(-3);
//******************************************************************* */
// SPLICE
// let animals = ["shark", "salmon", "whale", "bear", "lizard", "tortoise"];

//splice(startIdx, deleteCount, itemsToInsert);

// =====================
// INSERTING w/ SPLICE
// =====================
// 'at index 1, delete 0 items and insert "octopus"'
// animals.splice(1, 0, "octopus");
//["shark", "octopus", "salmon", "whale", "bear", "lizard", "tortoise"]

// =====================
// DELETING w/ SPLICE
// =====================
//'at index 5, delete 2 items'
// animals.splice(5, 2);
//["shark", "octopus", "salmon", "whale", "bear"]

// =====================
// REPLACING w/ SPLICE
// =====================
//'at index 3, delete 2 items and replace them with "orca" and "grizzly"'
// animals.splice(3, 2, "orca", "grizzly");
// ["shark", "octopus", "salmon", "orca", "grizzly"]

// *************************************************************************

// ============
// SORTING
// ============
let people = ["Mrs. Robsinson", "Angie", "Jolene", "Maggie May", "Roxanne"];

people.sort();
// ["Angie", "Jolene", "Maggie May", "Mrs. Robsinson", "Roxanne"]

let nums = [34, 10, 100000, 67, 99];

nums.sort();
//[10, 100000, 34, 67, 99]

//Sorts by converting values to strings and comparing their UTF-16 character codes.

// **********************************************************************

// ===============
// VALUE TYPES
// ===============
//Value Types - the variable stores the actual value:

let x = 100;
let y = x;

//If we change x
x = 99;
//y is unchanged
y; //100

// ===============
// REFERENCE TYPES
// ===============

// Array variables do not hold the actual array
//Instead, they store a REFERENCE to the array

let nums = [2, 4, 6, 8];
let myNums = nums; //myNums references the same array

// If we change nums
nums.push("BOO!");

//My nums is also changed:
myNums; //[2, 4, 6, 8, "BOO!"]

// ***********************************************************************
// ===============
// NESTED ARRAYS
// ===============
const animalPairs = [
  ["doe", ["buck", "stag"]],
  ["ewe", "ram"],
  ["peahen", "peacock"],
];

//To access 'ewe'
animalPairs[1][0];

//To access 'buck'
animalPairs[0][1][0];

//Updating a sub-array:
animalPairs[0][1].push("hart");
//apparently some people call male deer 'harts'.  idk.
