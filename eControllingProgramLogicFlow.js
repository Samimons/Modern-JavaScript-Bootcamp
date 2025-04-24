// >   //greater than
// <   //lesser than
// >=  //greater than or equal to
// <=  //lesser than or equal to
// ==  //equality
// !=  //non equality
// === //strict equality
// !== //strict non equality
// ||  //or
// &&  //and
// !   //not</>
// operator precedence !, &&, ||

// *****************************************************************************

// =============
// IF STATEMENTS
// =============

// Example 1
// if (1 === 1) {
// 	console.log("It's True!");
// }

// // Example 2
// let rating = 3;

// if (rating === 3) {
// 	console.log('YOU ARE A SUPERSTAR!');
// }

// // Example 3
// let num = 37;

// if (num % 2 !== 0) {
// 	console.log('ODD NUMBER!');
// }

// ****************************************************************************

// =======
// ELSE IF
// =======

// Performance Review
// 3 - superstar
// 2 - meets expectations
// 1 - needs improvement
// anything else - wtf?
// let rating = 1;

// if (rating === 3) {
// 	console.log('YOU ARE A SUPERSTAR!');
// }
// else if (rating === 2) {
// 	console.log('MEETS EXPECTATIONS');
// }
// else if (rating === 1) {
// 	console.log('NEEDS IMPROVEMENT');
// }

// =====================
// ELSE
// =======
// Performance Review
// 3 - superstar
// 2 - meets expectations
// 1 - needs improvement
// anything else - wtf?
// let rating = 2;

// if (rating === 3) {
//   console.log("YOU ARE A SUPERSTAR!");
// } else if (rating === 2) {
//   console.log("MEETS EXPECTATIONS");
// } else if (rating === 1) {
//   console.log("NEEDS IMPROVEMENT");
// } else {
//   console.log("INVALID RATING!");
// }

// ========
//Example 2
// ========

// let highScore = 1430;
// let userScore = 1600;

// if (userScore >= highScore) {
//   console.log(`Congrats, you have the new high score of ${userScore}`);
//   highScore = userScore;
// } else {
//   console.log(
//     `Good Game.  Your score of ${userScore} did not beat the high score of ${highScore}`
//   );
// }

// ******************************************************************************

// ====================
// NESTING CONDITIONALS
// ====================

//We can nest conditionals!
// let password = "hello  kitty";

// if (password.length >= 6) {
//   if (password.indexOf(" ") === -1) {
//     console.log("Valid Password!");
//   } else {
//     console.log("Password is long enough, but cannot contain spaces");
//   }
// } else {
//   console.log("Password must be longer!");
// }

// ******************************************************************************

// =====================
// TRUTHY & FALSY VALUES
// =====================

// FALSY:
// let loggedInUser = null;

// // TRUTHY:
// // let loggedInUser = 'Thomas123';

// if (loggedInUser) {
// 	console.log('YOU ARE LOGGED IN!');
// }
// else {
// 	console.log('PLEASE LOG IN!');
// }

// ******************************************************************************

// ================
// LOGICAL AND (&&)
// ================

// EXAMPLE 1
// let password = 'chicken Gal';

// if (password.length >= 8 && password.indexOf(' ') === -1) {
// 	console.log('VALID PASSWORD');
// }
// else {
// 	console.log('INVALID PASSWORD');
// }

// EXAMPLE 2
// Number must be between 1 and  10
// let num = 1;

// if (num >= 1 && num <= 10) {
// 	console.log('Number is between 1 and 10');
// }
// else {
// 	console.log('Please guess a number between 1 and 10');
// }

// *******************************************************************************

// ===============
// LOGICAL OR (||)
// ===============

// let age = 77;

// if (age < 6 || age >= 65) {
// 	console.log('YOU GET IN FOR FREE');
// }
// else {
// 	console.log('YOU MUST PAYYYY!');
// }

// EXAMPLE 2
// WE CAN USE MULTIPLE OR's:
// let color = 'violet';
// if (color === 'purple' || color === 'lilac' || color === 'violet') {
// 	console.log('GREAT CHOICE!');
// }

// ******************************************************************************

// ================
// NOT OPERATOR (!)
// ================

// ==================
// EXAMPLE 1
// ==================
// let loggedInUser;

// If there isn't a logged in user...
// if (!loggedInUser) {
// 	console.log('GET OUT OF HERE!');
// }

// ==================
// EXAMPLE 2
// ==================
// WE ONLY HAVE GRAPE AND CHERRY FLAVORS!
// let flavor = 'watermelon';

//ONE WAY OF WRITING THIS:
// if (flavor !== 'grape' && flavor !== 'cherry') {
// 	console.log('WE DONT HAVE THAT FLAVOR!');
// }
// ANOTHER WAY:
// if (!(flavor === 'grape' || flavor === 'cherry')) {
// 	console.log('WE ONLY HAVE GRAPE AND CHERRY!');
// }

// ********************************************************************************

// ===================
// OPERATOR PRECEDENCE
// ===================

// let x = 7;

// THIS VERSION RETURNS TRUE
//&& runs before ||
//x == 7 || x === 3 && x > 10;

// THIS VERSION RETURNS FALSE
// Use parens to change order
// (x == 7 || x === 3) && x > 10;

// *******************************************************************************

// ====================
// THE SWITCH STATEMENT
// ====================

// let day = 7;

// =================================
// USING TRADITIONAL CONDITIONAL....
// =================================

// if (day === 1) {
// 	console.log('MONDAY');
// }
// else if (day === 2) {
// 	console.log('TUESDAY');
// }
// else if (day === 3) {
// 	console.log('WEDNESDAY');
// }
// else if (day === 4) {
// 	console.log('THURSDAY');
// }
// else if (day === 5) {
// 	console.log('FRIDAY');
// }
// else if (day === 6) {
// 	console.log('SATURDAY');
// }
// else if (day === 7) {
// 	console.log('SUNDAY');
// }
// else {
// 	console.log('INVALID DAY');
// }

// *******************************************

// ======================
// USING A SWITCH INSTEAD
// ======================

// let day = 8;

// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   case 7:
//     console.log("Sunday");
//     break;
//   default:
//     console.log("Invalid day");
// }

// ========
//EXAMPLE 2
// ========

// let emoji = "heart";

// Switch with overlapping cases...
// switch (emoji) {
//   case "sad face":
//   case "happy face":
//     console.log("yellow");
//     break;
//   case "eggplant":
//     console.log("purple");
//     break;
//   case "heart":
//   case "lips":
//     console.log("red");
//     break;
// }

// ***************************************************************************

// ================
// TERNARY OPERATOR
// ================

let num = 7;

// ===========================
// Without Ternary Operator...
// ===========================

// if (num === 7) {
// 	console.log('lucky!');
// }
// else {
// 	console.log('BAD!');
// }

// ===========================================
// Same thing written with Ternary Operator...
// ===========================================

// num === 7 ? console.log("lucky!") : console.log("BAD!");

// ==============
// EXAMPLE 2
// ==============

// let value = "offline";

// ========================
// Without ternary operator
// ========================

// let color;
// if (value === 'offline') {
// 	color = 'red';
// }
// else {
// 	color = 'green';
// }

// ===================================
// One-liner using Ternary Operator...
// ===================================

// let color = value === "offline" ? "red" : "green";
// console.log(color);
