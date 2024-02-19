//********************** Exercise: Level 1 *********************/


//! 1.   Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
//? ****************************************************************

let challenge = "30 Days Of JavaScript"


//! 2.   Print the string on the browser console using console.log()
//? ****************************************************************

console.log(challenge);  // 30 Days Of JavaScript


//! 3.   Print the length of the string on the browser console using console.log()
//? ****************************************************************

console.log(challenge.length);  // 21


//! 4.   Change all the string characters to capital letters using toUpperCase() method
//? ****************************************************************

console.log(challenge.toUpperCase());  // 30 DAYS OF JAVASCRIPT


//! 5.   Change all the string characters to lowercase letters using toLowerCase() method
//? ****************************************************************

console.log(challenge.toLowerCase());  // 30 days of javascript


//! 6.   Cut (slice) out the first word of the string using substr() or substring() method
//? ****************************************************************

let firstWord = challenge.substring(0, challenge.indexOf(" "));
console.log(`First word of this phrase is : "${firstWord}".`);


//! 7.   Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
//? ****************************************************************

let restOfSentence = challenge.slice(firstWord.length+1);
console.log(`The rest of sentence is : '${restOfSentence}'`);


//! 8.   Check if the string contains a word Script using includes() method
//? ****************************************************************

console.log(challenge.includes('Script'));  // true


//! 9.   Split the string into an array using split() method
//? ****************************************************************

let splitOfSentence = challenge.split();
console.log(splitOfSentence);



//! 10.  Split the string 30 Days Of JavaScript at the space using split() method
//? ****************************************************************

let splitOfSpace = challenge.split(" ");
console.log(splitOfSpace);


//! 11.  Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
//? ****************************************************************

let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(companies.split(","));


//! 12.   Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
//? ****************************************************************

let firstSentence = "30 Days Of JavaScript.";
let afterSentence = firstSentence.replace('JavaScript', 'Python')
console.log(afterSentence);


//! 13.   What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
//? ****************************************************************

let index15OfSent = firstSentence.charAt(15)
console.log(index15OfSent);  // S


//! 14.   What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
//? ****************************************************************

console.log(firstSentence.charCodeAt("J"));  // 51


//! 15.   Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
//? ****************************************************************

let indexOfFirsta = firstSentence.indexOf('a');
console.log(indexOfFirsta);  // 4


//! 16.   Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
//? ****************************************************************

let lastIndexOfa = firstSentence.lastIndexOf('a');
console.log(lastIndexOfa);  // 14


//! 17.   Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
//? ****************************************************************

let newSentence = 'You cannot end a sentence with because because because is a conjunction';
let indexOfFirstBecause = newSentence.indexOf('because');
console.log(indexOfFirstBecause);  // 31


//! 18.   Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a c0njunction'
//? ****************************************************************

let indexOfLastBecause = newSentence.lastIndexOf('because');
console.log(indexOfLastBecause);  // 47


//! 19.   Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
//? ****************************************************************

let searchOfFirstBecause = newSentence.search('because');
console.log(searchOfFirstBecause);  // 31


//! 20.    Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
//? ****************************************************************

let otherSentence = ' 30 Days Of JavaScript '
let removeSpaces = otherSentence.trim();
console.log(removeSpaces);  // '30 Days Of JavaScript'

let removeLeftSpace = otherSentence.trimStart();
console.log(removeLeftSpace);'30 Days Of JavaScript '

let removeRigthSpace = otherSentence.trimEnd();
console.log(removeRigthSpace);  // ' 30 Days Of JavaScript'


//! 21.   Use startsWith() method with the string 30 Days Of JavaScript and make the result true
//? ****************************************************************

let newSentence2 = '30 Days Of JavaScript';
let sentenceStartWith = newSentence2.startsWith('30');
console.log(sentenceStartWith);  // true 


//! 22.   Use endsWith() method with the string 30 Days Of JavaScript and make the result true
//? ****************************************************************

let sentenceEndWith = newSentence2.endsWith('pt');
console.log(sentenceEndWith);  // true


//! 23.   Use match() method to find all the a’s in 30 Days Of JavaScript
//? ****************************************************************

let marchMethod = newSentence2.match(/a/g);
console.log(marchMethod);  // ['a', 'a', 'a']


//! 24.   Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
//? ****************************************************************

let firstPart = '30 Days of ';
let secondPart = 'JavaScript';
console.log(firstPart.concat(secondPart));


//! 25.   Use repeat() method to print 30 Days Of JavaScript 2 times
//? ****************************************************************

let lastSent = '30 Days Of JavaScript';
let double = lastSent.repeat(2);
console.log(double);



//********************** Exercise: Level 2 *********************/
//? ***********************************************************/ 


//!   1.  Using console.log() print out the following statement
//? ****************************************************************

const sentence1 = "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
console.log(sentence1); 

//!   2.  Using console.log() print out the following quote by Mother Teresa
//? ****************************************************************

const motherTeresaSay = `"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead." by Mother Tereza`
console.log(motherTeresaSay);


//! 3.  Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
//? ****************************************************************

let number1 = '10';
let number2 = 10;
console.log(typeof(number1));  // string
console.log(typeof(number2));  // number
let number3 = parseInt(number1);
console.log(typeof(number3));  // number


//! 4.  Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
//? ****************************************************************
let numberss = '9.8'
console.log(parseFloat(numberss));  // 9.8

console.log(Number(numberss));

console.log(Math.round(numberss));  // or
console.log(Math.ceil(numberss));


//!  5. Check if 'on' is found in both python and jargon
//? ****************************************************************

let firstWrd = 'python';
let secondWrd = 'jargon';

console.log(firstWrd.search('on'));
console.log(secondWrd.search('on'));

//!  6. I hope this course is not full of jargon. Check if jargon is in the sentence.
//? ****************************************************************




//!  7. Generate a random number between 0 and 100 inclusively.
//? ****************************************************************




//!  8. Generate a random number between 50 and 100 inclusively.
//? ****************************************************************




//!  9. Generate a random number between 0 and 255 inclusively.
//? ****************************************************************



//!  10. Access the 'JavaScript' string characters using a random number.
//? ****************************************************************



//!  11. Use console.log() and escape characters to print the following pattern.
//? ****************************************************************

//      1 1 1 1 1
//      2 1 2 4 8
//      3 1 3 9 27
//      4 1 4 16 64
//      5 1 5 25 125


//!  12. Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
//? ****************************************************************



//********************** Exercise: Level 3 *********************/
//? ***********************************************************/ 


//!  1. 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
//? ****************************************************************




//!  2. Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
//? ***********************************************************/ 




//!  3. Clean the following text and find the most frequent word (hint, use replace and regular expressions).
//? ***********************************************************/ 

const sentenceSon = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'



//!  4. Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
//? ***********************************************************/ 