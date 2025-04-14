//Basic Syntax

//let********************************************************************************

//basic variable
let somename = value;

//Updating a variable
let age = 18;
//age = 18
age = age + 1;
//age = 19

//camelCase
//use camelCase when you have multiple words as variable
let thisIsCamelCase = 10;

//Redeclaring a variable
let test = 5;
let test = 6;
//will produce an Uncaught SyntaxError: Identifier 'test' has already been declared
//The correct way:
let score = 0;
score = score + 10;

//shortcut
score += 10; //addition
score -= 10; //subtraction
score *= 10; //multiplication
score /= 10; //division

//Can also use another variable instead of number
let score = 10;
let goal = 2;
score += goal; //12

//unary operator
let counter = 0;
counter++; //1
counter--;

//const******************************************************************************
//const works just like let, except you can't change the value.
const hens = 4;
hens = 20; //will produce an - Uncaught TypeError: Assignment to constant variable

//why use const
const pi = 3.14159;
const dayInWeek = 7;
const minHeightForRide = 90;
