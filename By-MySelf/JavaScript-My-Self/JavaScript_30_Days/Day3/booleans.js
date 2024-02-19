
//********************** DAY 3 - BOOLEANS *********************/
//? ***********************************************************/ 

//? ===============================================================
// Booleans
//?================================================================ //

console.log(" ---------------------- Day3 - Booleans ---------------------");
console.log("****************************************************************");

// A boolean data type represents one of the two values:true or false. Boolean value is either true or false. The use of these data types will be clear when you start the comparison operator. Any comparisons return a boolean value which is either true or false.

//! Example: Boolean Values

let isLightOn = true;
let isRaining = false
let isHungry = false;
let isMarried = true;
let trueValue = 4 > 3  // true
let falseValue = 4 < 3 // false

//! We agreed that boolean values are either true or false.

//? Truthy values
// All numbers(positive and negative) are truthy except zero
// All strings are truthy except an empty string ('')
// The boolean true

//? Falsy values

// 0
// On
// null
// undefined
// NaN
// the boolean false
// '', "", ``, epmty string

//! It is good to remember those truthy values and falsy values. In later section, we will use them with conditions to make decisions.



//? Undefined
// --------------------------------------------------------------------------------// 

//! If we declare a variable and if we do not assign a value, the value will be undefined. In addition to this, if a function is not returning the value, it will be undefined.

let firstName
console.log(firstName);  // undefined : not defined, because it is not assigned to a value yet



//? Null
// --------------------------------------------------------------------------------// 

let empty = null
console.log(empty);  // null , means no value


//? ---------------------------- OPERATORS ----------------------------------------//
// --------------------------------------------------------------------------------// 

// 1.Assignment operators
//? *********************

// An equal sign in JavaScript is an assignment operator. It uses to assign a variable.

let firstName1 = 'Ferit'
let country = 'France'

console.log(`Operator\t\tExemple \t\tSame As \t\tDescription`);
console.log(`--------\t\t------- \t\t-------- \t\t----------`);
console.log(`=\t\t\t\tx = y \t\t\tx = y \t\t\ty is stored in x`);
console.log(`+=\t\t\t\t+= = y \t\t\tx = x + y \t\tx + y resut is stored in x`);
console.log(`-=\t\t\t\tx -= y \t\t\tx = x - y \t\tx - y resut is stored in x`);
console.log(`*=\t\t\t\tx *= y \t\t\tx = x * y \t\tx * y resut is stored in x`);
console.log(`/=\t\t\t\tx /= y \t\t\tx = x / y \t\tx / y resut is stored in x`);
console.log(`%=\t\t\t\tx %= y \t\t\tx = x % y \t\tx % y resut is stored in x`);
console.log(`**=\t\t\t\tx **= y \t\tx = x ** y \t\tx ** y resut is stored in x`);



// 2. Arithmetic Operators
//? **********************
//! Arithmetic operators are mathematical operators.

//     Addition(+): a + b
//     Subtraction(-): a - b
//     Multiplication(*): a * b
//     Division(/): a / b
//     Modulus(%): a % b
//     Exponential(**): a ** b


console.log("");
console.log("******************************************************************");
console.log("");

let numOne = 4
let numTwo = 3
let sum = numOne + numTwo
let diff = numOne - numTwo
let mult = numOne * numTwo
let div = numOne / numTwo
let remainder = numOne % numTwo
let powerOf = numOne ** numTwo

console.log(`The sum of ${numOne} and ${numTwo} = ${sum}`);
console.log(`The difference of ${numOne} and ${numTwo} = ${diff}`);
console.log(`The multiplication of ${numOne} and ${numTwo} = ${mult}`);
console.log(`The division of ${numOne} and ${numTwo} = ${div}`);
console.log(`The remainder of ${numOne} to ${numTwo} = ${remainder}`);
console.log(`The power of ${numOne} and ${numTwo} = ${powerOf}`);


// EXEMPLES - 1
//?---------

const PI = 3.14
let radius = 10  // length in cm


//! let us calculate area of a  circle
const areaOfCircle = PI * radius * radius
console.log(`The area of circle with radius 10 is ${areaOfCircle} cm2.`);


// EXEMPLES - 2
//?---------

const gravity = 9.81      // in m/s2
let mass = 88             // in Kilogram

//! Let us calculate weight of an object

const weight = mass * gravity
console.log(`My weight is ${Math.round(weight)} Newton.`);


// EXEMPLES - 3
//?---------
const boilingPoint = 100  // temperature in oC, boiling point of water
const bodyTemp = 37       // body temperature in oC

//! Concatenating string with numbers using string interpolation

/*
 The boiling point of water is 100 oC.
 Human body temperature is 37 oC.
 The gravity of earth is 9.81 m/s2.
 */

 console.log(`The boiling point of water is ${boilingPoint} oC, human body temperature is ${bodyTemp} oC,  the gravity of earth is ${gravity} m/s2.`);


 
// 3. Comparison Operators
//? **********************
//! In programming we compare values, we use comparison operators to compare two values. We check if a value is greater or less or equal to other value.

console.log("");
console.log("***************************************************************");
console.log("");
console.log(`Operator\t\tNam \t\tDescription`);
console.log(`--------\t\t------- \t\t-------- `);
console.log(`==\t\t\t\tEqual in value only: Equivalent \t\t\t\t\tx == y`);
console.log(`===\t\t\t\tEqual in value and data type: Exactly equal \t\tx === y`);
console.log(`!=\t\t\t\tNot equal \t\t\t\t\t\t\t\t\t\t\tx = x != y` );
console.log(`>\t\t\t\tGreater than \t\t\t\t\t\t\t\t\t\tx = x > y`);
console.log(`<\t\t\t\tLess than \t\t\t\t\t\t\t\t\t\t\tx = x < y`);
console.log(`>=\t\t\t\tGreater than or equal to \t\t\t\t\t\t\tx = x >= y`);
console.log(`<=\t\t\t\tLess than or equal to \t\t\t\t\t\t\t\tx = x <= y `);


console.log(3 > 2)              // true, because 3 is greater than 2
console.log(3 >= 2)             // true, because 3 is greater than 2
console.log(3 < 2)              // false,  because 3 is greater than 2
console.log(2 < 3)              // true, because 2 is less than 3
console.log(2 <= 3)             // true, because 2 is less than 3
console.log(3 == 2)             // false, because 3 is not equal to 2
console.log(3 != 2)             // true, because 3 is not equal to 2
console.log(3 == '3')           // true, compare only value
console.log(3 === '3')          // false, compare both value and data type
console.log(3 !== '3')          // true, compare both value and data type
console.log(3 != 3)             // false, compare only value
console.log(3 !== 3)            // false, compare both value and data type
console.log(0 == false)         // true, equivalent
console.log(0 === false)        // false, not exactly the same
console.log(0 == '')            // true, equivalent
console.log(0 == ' ')           // true, equivalent
console.log(0 === '')           // false, not exactly the same
console.log(1 == true)          // true, equivalent
console.log(1 === true)         // false, not exactly the same
console.log(undefined == null)  // true
console.log(undefined === null) // false
console.log(NaN == NaN)         // false, not equal
console.log(NaN === NaN)        // false
console.log(null === null)        // false
console.log(typeof NaN)         // number

console.log('mango'.length == 'avocado'.length)  // false
console.log('mango'.length != 'avocado'.length)  // true
console.log('mango'.length < 'avocado'.length)   // true
console.log('milk'.length == 'meat'.length)      // true
console.log('milk'.length != 'meat'.length)      // false
console.log('tomato'.length == 'potato'.length)  // true
console.log('python'.length > 'dragon'.length)   // false


// Try to understand the above comparisons with some logic. Remembering without any logic might be difficult. JavaScript is somehow a wired kind of programming language. JavaScript code run and give you a result but unless you are good at it may not be the desired result.

// As rule of thumb, if a value is not true with == it will not be equal with ===. Using === is safer than using ==. The following link has an exhaustive list of comparison of data types.
//!------------------------------------------------------------------------------------



// 4. Logical Operators
//? ********************

// The following symbols are the common logical operators: &&(ampersand) , ||(pipe) and !(negation). The && operator gets true only if the two operands are true. The || operator gets true either of the operand is true. The ! operator negates true to false and false to true.

//!  '&&' ampersand operator example

const check1 = 4 > 3 && 10 > 5         // true && true -> true
const check2 = 4 > 3 && 10 < 5         // true && false -> false
const check3 = 4 < 3 && 10 < 5         // false && false -> false


//!  '||' pipe or operator, example

const check4 = 4 > 3 || 10 > 5         // true  || true -> true
const check5 = 4 > 3 || 10 < 5         // true  || false -> true
const check6 = 4 < 3 || 10 < 5         // false || false -> false


//!  '!' Negation examples

let check7 = 4 > 3                     // true
let check8 = !(4 > 3)                  //  false
let isLightOn1 = true
let isLightOff1 = !isLightOn1           // false
let isMarried1 = !false                // true


// 5. Increment Operator
//? ********************
//! In JavaScript we use the increment operator to increase a value stored in a variable. The increment could be pre or post increment. Let us see each of them:

// Pre-increment
let count1 = 0
console.log(++count1)        // 1
console.log(count1)          // 1

// Post-increment
let count = 0
console.log(count++)        // 0
console.log(count)          // 1

//! We use most of the time post-increment. At least you should remember how to use post-increment operator.


// 6. Decrement Operator
//? ********************
//! In JavaScript we use the decrement operator to decrease a value stored in a variable. The decrement could be pre or post decrement. Let us see each of them:

// Pre-decrement
let count2 = 0
console.log(--count2) // -1
console.log(count2)  // -1

// Post-decrement
let count3 = 0
console.log(count3--) // 0
console.log(count3)   // -1


// 7. Ternary Operators
//? ********************

//! Ternary operator allows to write a condition. Another way to write conditionals is using ternary operators. Look at the following examples:


// Exemple - 1
//! -----------

let isRaining1 =  true
isRaining1
? console.log('You need a rain coat.')
: console.log('No need for a rain coat')


// Exemple - 2
//! -------------

let number = 0
number >= 0
? console.log(`${number} is a positive number`)
: console.log(`${number} is a negative number`);


// 8. Operator Precedence
//? ********************

const a = 4 ** 3 ** 2; // Same as 4 ** (3 ** 2); evaluates to 262144
console.log(a);
console.log((4 ** 3) ** 2);
const b = 1000 / 100 / 5; // Same as (4 / 3) / 2; evaluates to 0.6666...
console.log(b);

// For prefix unary operators, suppose we have the following pattern:

const a1 = 1;
const b1 = 2;
console.log(typeof a1 + b1); // Equivalent to (typeof a) + b; result is "number2"


// 9. Window prompt() method
//? ************************

// let number9 = prompt('Enter number', 'number goes here')
// console.log(number9)


// 10. Window confirm() method
//? **************************

// The confirm() method displays a dialog box with a specified message, along with an OK and a Cancel button. A confirm box is often used to ask permission from a user to execute something. Window confirm() takes a string as an argument. Clicking the OK yields true value, whereas clicking the Cancel button yields false value.

// const agree = confirm('Are you sure you like to delete? ')
// console.log(agree) 
//! result will be true or false based on what you click on the dialog box

// 11. Date Object
//? **************************

//? 11.a  Creating a time object
// Once we create time object. The time object will provide information about time. Let us create a time object

const now = new Date()
console.log(now) // Sun Feb 18 2024 22:12:32 GMT+0100 (Orta Avrupa Standart Saati)

//! We have created a time object and we can access any date time information from the object using the get methods we have mentioned on the table.


//? 11.b  getFullYear()
// Let's extract or get the full year from a time object.

const now11 = new Date()
console.log(now11.getFullYear());  // 2024

//? 11.b  Getting month()
// Let's extract or get the month from a time object.

console.log(now11.getMonth());  //1 (month[0-11])

//? 11.b  Getting Date()
// Let's extract or get the date of the month from a time object.

console.log(now.getDate());  // 18

//? 11.b Getting day()
// Let's extract or get the day of the week from a time object.

console.log(now.getDay());  // 0 : Sunday (days: 0-6)

//? 11.b Getting hours()
// Let's extract or get the hours from a time object.

console.log(now.getHours());  // 22 (time: 22:24)

//? 11.b  Getting minutes()
// Let's extract or get the minutes from a time object.

console.log(now.getMinutes());  // 24 min

//? 11.c Getting time()

console.log(now.getTime());  // 1578092201341, this is the number of seconds passed from January 1, 1970 to January 4, 2020 00:56:41

const allSeconds = Date.now()
const timeInSeconds = new Date().getTime()
console.log(allSeconds == timeInSeconds);

const year = now.getFullYear()
const month = now.getMonth()
const date = now.getDate()
const hours = now.getHours()
const minutes = now.getMinutes()

console.log(`${date} / ${month} / ${year}  Time: ${hours}:${minutes}`);