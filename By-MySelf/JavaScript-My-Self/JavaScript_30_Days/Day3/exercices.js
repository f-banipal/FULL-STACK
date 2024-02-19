//********************** Exercise: Level 1 *********************/
//? ***********************************************************/

//!   1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
//? ***************************************************************

const firstName = "Ferit";
const lastName = "Banipal";
const country = "Rusia";
const city = "Moscow";
const age = 40;
const isMarried = true;
const year = "2012";

console.log(`Type of ${firstName} is : "${typeof firstName}"`); // "string"
console.log(`Type of ${lastName} is : "${typeof lastName}"`); // "string"
console.log(`Type of ${country} is : "${typeof country}"`); // "string"
console.log(`Type of ${city} is : "${typeof city}"`); // "string"
console.log(`Type of ${age} is : "${typeof age}"`); // "number"
console.log(`Type of ${isMarried} is : "${typeof isMarried}"`); // "boolean"
console.log(`Type of ${year} is : "${typeof year}"`); // "string"

//!   2. Check if type of '10' is equal to 10
//? **************************************************************

const numberOne = "10";
const numberTwo = 10;

console.log(typeof numberOne); // false
console.log(typeof numberTwo); // number
console.log(typeof numberOne == typeof numberTwo); // false

//!   3. Check if parseInt('9.8') is equal to 10
//? ***************************************************************

const number1 = parseInt("9.8");
const number2 = 10;
console.log(number1); // 9
console.log(number1 == number2); // false

//!   4. Boolean value is either true or false.
//? ***************************************************************
//     i. Write three JavaScript statement which provide truthy value.
//     ii. Write three JavaScript statement which provide falsy value.

const myName = "Ferit";
const myDate = 1984;
const myArray = ["1", "2"];
console.log(Boolean(myName)); // true
console.log(Boolean(myDate)); // true
console.log(Boolean(myArray)); // true

const stm3 = "";
const stm2 = 0;
let stm1;
let stm4 = "";

console.log(Boolean(stm4)); // false
console.log(Boolean(stm3)); // false
console.log(Boolean(stm2)); // false
console.log(Boolean(stm1)); // false

//!   5. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
//? ***************************************************************
//      4 > 3
//      4 >= 3
//      4 < 3
//      4 <= 3
//      4 == 4
//      4 === 4
//      4 != 4
//      4 !== 4
//      4 != '4'
//      4 == '4'
//      4 === '4'
//      Find the length of python and jargon and make a falsy comparison statement.
console.log("------------------------------");
console.log(4 > 3); // true
console.log(4 >= 3); // true
console.log(4 < 3); // false
console.log(4 <= 3); // false
console.log(4 == 4); // true
console.log(4 === 4); // true
console.log(4 != 4); // false
console.log(4 !== 4); // false
console.log(4 != "4"); // false
console.log(4 !== "4"); // true
console.log(4 == "4"); // true
console.log(4 === "4"); // false

//!   6. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
//? ***************************************************************
//      4 > 3 && 10 < 12      : true && true => true
//      4 > 3 && 10 > 12      : true && false => false
//      4 > 3 || 10 < 12      : true || true => true
//      4 > 3 || 10 > 12      : true || false => true
//*     !(4 > 3)              : !(true) => false
//*     !(4 < 3)              : !(false) => true
//*     !(false)              : true
//*     !(4 > 3 && 10 < 12)   : !(true && true) => !(true) => false
//*     !(4 > 3 && 10 > 12)   : !(true && false) => !(false) => true
//*     !(4 === '4')          : !(false) => true
//      There is no 'on' in both dragon and python

console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!false);
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === "4"));

const v1 = "dragon";
const v2 = "python";
console.log(!(v1.includes("on") && v2.includes("on"))); // false

//!   7. Use the Date object to do the following activities
//? ***************************************************************
const dateToday = new Date();

//      What is the year today?
console.log(dateToday.getFullYear()); // 2024

//      What is the month today as a number?
console.log(dateToday.getMonth()); // 1

//      What is the date today?
console.log(dateToday); // Sun Feb 18 2024 23:57:10 GMT+0100 (Orta Avrupa Standart Saati)

//      What is the day today as a number?
console.log(dateToday.getDay()); // 0 : Sunday

//      What is the hours now?
console.log(dateToday.getHours()); // 23

//      What is the minutes now?
console.log(dateToday.getMinutes()); // 58 (23:58)

//      Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(Math.floor(dateToday.getTime() / 1000)); // 1708297366

//? ***********************************************************/
//********************** Exercise: Level 2 *********************/
//? ***********************************************************/

//!   1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
//? ***************************************************************

//      Enter base: 20
//      Enter height: 10
//      The area of the triangle is 100

// const baseOfTriangle = Math.floor(Number(prompt('Please enter the base of a triangle rectangulaire :')));
// const heightOfTriangle = Math.floor(Number(prompt('Please enter the height of a triangle rectangulaire :')));
// const area = 0.5 * baseOfTriangle * heightOfTriangle
// console.log(`The area of the of the triangle is = ${area}`);

//!   2. Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
//? ***************************************************************

//      Enter side a: 5
//      Enter side b: 4
//      Enter side c: 3
//      The perimeter of the triangle is 12

// const kenarA = Math.floor(Number(prompt('Side a:')));
// const kenarB = Math.floor(Number(prompt('Side b:')));
// const kenarC = Math.floor(Number(prompt('Side c:')));
// const perimeterTriangle = kenarA + kenarB + kenarC
// console.log(`The perimeter of triangle is : ${perimeterTriangle}`);

//!   3. Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
//? ***************************************************************
// const lengthOfRectangle = Number(prompt('Please enter the value of length :'));
// const widthOfRectangle = Number(prompt('Please enter the value of width :'))

// const perimeterOfRectangle = 2 * (lengthOfRectangle + widthOfRectangle);
// console.log(perimeterOfRectangle);

//!   4. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
//? ***************************************************************

// const PI = 3.14
// const radiusOfCircle = Number(prompt('Please enter radius : '));
// const areaOfCircle = PI * radiusOfCircle ** 2
// console.log(`The area of a circle with radius ${radiusOfCircle} is : ${areaOfCircle}`);

//!   5. Calculate the slope, x-intercept and y-intercept of y = 2x -2
//? ***************************************************************
const x1 = 0;
const x2 = 1;
const y1 = 0;
const y2 = -2;
const slope = (y2 - y1) / (x2 - x1);
console.log(`The slope is : ${slope}`);
console.log(`x-intercept : ${x2}`);
console.log(`x-intercept : ${y2}`);

//!   6. Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
//? ***************************************************************
const x11 = 2;
const x22 = 6;
const y11 = 2;
const y22 = 10;
const slope2 = (y22 - y11) / (x22 - x11);
console.log(`The slope is ${slope2}`);

//!   7. Compare the slope of above two questions.
//? ***************************************************************

console.log(slope == slope2); // false : -2 != 2

//!   8. Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
//? ***************************************************************
const valueOfX = -3;
const valueOfY = valueOfX ** 2 + 6 * valueOfX + 9;
console.log(`If we give ${valueOfX} to x then y will equal to ${valueOfY}`);

//!   9. Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
//? ***************************************************************
//      Enter hours: 40
//      Enter rate per hour: 28
//      Your weekly earning is 1120

// const workHours = Number(prompt('Enter your work hours:'));
// const workRate = Number(prompt('Enter rate per hour:'));
// const weeklyEarning = workHours * workRate;
// console.log(weeklyEarning);

//!   10. If the length of your name is greater than 7 say, your name is long else say your name is short.
//? ***************************************************************

const myShortName = "FeritBanipal";

myShortName.length > 7
  ? console.log("Your name is long")
  : console.log("Your name is short.");

//!   11. Compare your first name length and your family name length and you should get this output.
//? ***************************************************************

let myfirstName = "Ferit";

let mylastName = "Banipal";

myfirstName.length > mylastName.length
  ? console.log(
      `Your first name, ${myfirstName} is longer than your family name, ${mylastName}`
    )
  : console.log(
      `Your family name, ${mylastName} is longer than your first name, ${myfirstName}`
    );

//!   12. Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
//? ***************************************************************

// let myAge = 6774
// let yourAge = 0
// let differenceAges = Math.abs(myAge - yourAge)
// console.log(`I am ${differenceAges} years older than you.`);

//!   13. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
//? ***************************************************************

// const licenceAge = 18;
// const yourBirth = Number(prompt('Enter birth year :'));
// const driveLicence = dateToday.getFullYear() - yourBirth
// const yearAfter = licenceAge - driveLicence

// driveLicence > 18
// ? console.log(`You are ${driveLicence}. You are old enough to drive.`)
// : console.log(`You are ${driveLicence}. You will be allowed to drive after ${yearAfter} years.`);

//!   14. Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
//? ***************************************************************
//      Enter number of years you live: 100
//      You lived 3153600000 seconds.

// const yearOfLive = Number(prompt("Enter your age:", "my age"));
// const yourAgeInSeconds = yearOfLive * (365.25 * 24 * 60 * 60);
// console.log(yourAgeInSeconds);

//!   15. Create a human readable time format using the Date time object
//? ***************************************************************
//      YYYY-MM-DD HH:mm
//      DD-MM-YYYY HH:mm
//      DD/MM/YYYY HH:mm

let ourDate = new Date();
let myYear = ourDate.getFullYear();
let myMonth = ourDate.getMonth() + 1;
let myDay = ourDate.getDate();
let myHour = 7;
let myMinutes = 5;
console.log(`${myYear} - ${myMonth} - ${myDay} ${myHour}:${myMinutes}`);
console.log(`${myDay} - ${myMonth} - ${myYear} ${myHour}:${myMinutes}`);
console.log(`${myDay} / ${myMonth} / ${myYear} ${myHour}:${myMinutes}`);

//? ***********************************************************/
//********************** Exercise: Level 3 *********************/
//? ***********************************************************/

//! Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
//? ***************************************************************

if (myHour < 10 && myMinutes < 10 === true){
     console.log(`${myYear} - ${myMonth} - ${myDay} 0${myHour}:0${myMinutes}`)   
}else if (myHour < 10 && myMinutes >= 10 == true) {
        console.log(`${myYear} - ${myMonth} - ${myDay} 0${myHour}:${myMinutes}`);
}else if(myHour >= 10 && myMinutes < 10 == true){
console.log(`${myYear} - ${myMonth} - ${myDay} ${myHour}:0${myMinutes}`)
}else console.log(`${myYear} - ${myMonth} - ${myDay} ${myHour}:${myMinutes}`)





