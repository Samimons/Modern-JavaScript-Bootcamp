//Simple Opeations

// Addition
50 + 5; //55

//Subtraction
90 - 1; //89

//Multiplication
11111 * 7; //77777

//Division
400 / 25; //16

//Modulo
27 % 2; //1

//Exponent
2 ** 3; //8

//NaN Not a Number
//NaN is a numeric value that represents something that is...Not a Number
0 / 0; //NaN
1 + NaN; //NaN

//Infinity
1 / 0; //Infinity
-1 / 0; //Infinity

//Math Object
Math.PI;
//3.141593786234
Math.round(4.8);
//5
Math.abs(-456);
//456

//raises 2 to the 5th power
Math.pow(2, 5);
//32

//removes decimal
Math.floor(3.3463456);
//3

Math.random();
//0.0000000001 - 0.99999999999999

//Random number betwee 1 - 10 *******************************************************
let step1 = Math.random();
let step2 = step1 * 10;
let step3 = Math.floor(step2);
let step4 = step3 + 1;
step4;

console.log;
Math.floor(Math.random() * 6) + 1;

//Returns a number ******************************************************************
parseInt("24");
//24
parseInt("24.345");
//24
parseInt("24dayslater");
//24
parseInt("days24later");
//NaN

//Returns a float
parseFloat("24.987");
//24.987
parseFloat("7");
//7
parseFloat("i ate 3 shrimp");
//NaN
