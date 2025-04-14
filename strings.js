//Strings *******************************************************************
let fName = "Mike";
let msg = "open at 10am";
let animal = "dog";

("he said, 'hahaha'");
('he said, "hahaha"');

let firstName = "Michael";
let secondName = "Stokes";
let fullName = firstName + " " + secondName;
//Michael Stokes

//Length ********************************************************************
"hello".length;
//5
//white spaces included
" h e l l o ".length;
//11
let mySong = "I shot the sheriff";
mySong.length;
//18

//typeof *******************************************************************
typeof 89;
//number
typeof "89";
//string
typeof true;
//boolean
typeof NaN;
//number

//String Indices ************************************************************
//Each character has a corresponding index (a positional number)
//c h i c k e n
//0 1 2 3 4 5 6

//Retrieving a specific string character **********************************
let myTune = "Surfin' USA";
myTune[0];
//S
myTune[20];
//Uncaught ReferenceError: mysong is not defined
myTune[myTune.length - 1];
//A

//String Methods ************************************************************
thing.method();

// Change text to upper or lowercase ************************************
let msg = "you are so grounded mr";
msg.toUpperCase();
//YOU ARE SO GROUNDED MR
msg.toLowerCase();
//you are so grounded mr

//Trims white space either side of string ***********************************
let grt = "    hello ";
grt.trim();
//hello

//More than one method at once *********************************************
let color = "       purple       ";
color.trim().toUpperCase();

//Finding the Index *******************************************************
"baseball".indexOf("ball");
//4
"baseball".indexOf("b");
//0 only shows the 1st instance
"baseBall".indexOf("B");
//4 case sensitive
"baseball".indexOf("job");
//-1 - returns when doesn't exist in string, useful for conditional logic

//Slicing Strings ***********************************************************
let sas = "whodareswins";
sas.slice(0, 3);
//who
let sas = "whodareswins";
sas.slice(3);
//dareswins

"£50.60".slice(1);
//50.60
"50.60".slice(4);
//60

//Replace part of string ****************************************************
let juice = "i love robinsons";
juice.replace("love", "hate");

"ha ha ha".replace("ha", "hee");
//hee ha ha - only replaces first instance
