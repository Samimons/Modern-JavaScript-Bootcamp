// =========
// FOR LOOPS
// =========

// 3 pieces to a for loop:
// 1 - Variable declaration
// 2 - The condition
// 3 - Update the loop variable

// STEP 1: 'let i = 1' - start i at 1
// STEP 2: 'i <= 10' - run the loop as long as i <= 10
// STEP 3: 'i++' - add 1 to i each time through
// for (let i = 1; i <= 10; i++) {
//   console.log("HELLO:", i);
// }

// **********************************

// Counting by 3's:
// for (let i = 1; i <= 10; i += 3) {
//   console.log("HELLO:", i);
// }

// **********************************

// Printing first 20 perfect squares:
// for (let num = 1; num <= 20; num++) {
//   console.log(`${num}x${num} = ${num * num}`);
// }

// **********************************

// Counting DOWN from 200 by intervals of 25:
// for (let i = 200; i >= 0; i -= 25) {
//   console.log(i);
// }
// console.log("AFTER THE LOOP!");

// **********************************

// ==============
// INFINITE LOOPS
// ==============
// DON'T RUN THIS!
// for (let i = 1; i !== 20; i += 2) {
// 	console.log(i);
// }

// THE ABOVE LOOP NEVER ENDS
// i starts at 1, and we add 2 each time
// 1,3,5,7,9,11,13,15,17,19,21,etc.
// i never hits 20, so the loop condition is always true

// Instead, write it this way:
// for (let i = 1; i <= 20; i += 2) {
// 	console.log(i);
// }

// ******************************************************************

// ==================
// FOR LOOPS & ARRAYS
// ==================

// ======= EXAMPLE 1 ==========
// Printing each element in an array
// const examScores = [ 98, 77, 84, 91, 57, 66 ];

// for (let i = 0; i < examScores.length; i++) {
// 	console.log(i, examScores[i]);
// }

// ********************************

// ======= EXAMPLE 2 ==========
// Same idea, but with a more complex array
// const myStudents = [
// 	{
// 		firstName : 'Zeus',
// 		grade     : 86
// 	},
// 	{
// 		firstName : 'Artemis',
// 		grade     : 97
// 	},
// 	{
// 		firstName : 'Hera',
// 		grade     : 72
// 	},
// 	{
// 		firstName : 'Apollo',
// 		grade     : 90
// 	}
// ];

// for (let i = 0; i < myStudents.length; i++) {
// 	let student = myStudents[i];
// 	console.log(`${student.firstName} scored ${student.grade}`);
// }

// *********************************

// ======= EXAMPLE 3 ==========
// Averaging all grades in myStudents array
// let total = 0; //total will hold the sum of all grades

// for (let i = 0; i < myStudents.length; i++) {
// 	let student = myStudents[i];
// 	total += student.grade; //add each grade to total
// }
// console.log(total / myStudents.length); //divide by number of students

// ********************************

// ======= EXAMPLE 4 ==========
// Reversing a string
// const word = 'stressed';

// let reversedWord = ''; //will hold reversed string

// //Loop backwards over the string
// for (let i = word.length - 1; i >= 0; i--) {
// 	reversedWord += word[i]; //add each char to reversedWord
// }

// console.log(reversedWord);

// *******************************************************************
