//********************** Exercise: Level 2 *********************/
//? ***********************************************************/ 


//!   1.  Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
//? ****************************************************************




//!   2. First remove all the punctuations and change the string to array and count the number of words in the array
//? ****************************************************************

let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
// console.log(words)
// console.log(words.length)

let cleanText = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
console.log(cleanText);


let myBen = "Ben bir robot yesil robot"
console.log(myBen.replace(/robot$/, "yasam"));


let wordArr = cleanText.split(" ")
console.log(wordArr);

//!   3. In the following shopping cart add, remove, edit items
//? ***************************************************************

// a .add 'Meat' in the beginning of your shopping cart if it has not been already added
// b. add Sugar at the end of you shopping cart if it has not been already added
// c. remove 'Honey' if you are allergic to honey
// d. modify Tea to 'Green Tea'

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

shoppingCart.unshift("Meat");
console.log(shoppingCart);

shoppingCart.push("Sugar");
console.log(shoppingCart);

console.log(shoppingCart.indexOf("Honey"));
shoppingCart.splice(4, 1);
console.log(shoppingCart);



let sira = shoppingCart.lastIndexOf("Tea");

shoppingCart[sira] = "GREEN";
console.log(shoppingCart);


//********************** Exercise: Level 3 *********************/
//? ***********************************************************/ 

//!   1. The following is an array of 10 students ages:
//? ***************************************************************

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort the array and find the min and max age

// Find the median age(one middle item or two middle items divided by two)

// Find the average age(all items divided by number of items)

// Find the range of the ages(max minus min)

// Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array


//!   2. Find the middle country(ies) in the countries array
//? ***************************************************************







//!   3. Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
//? ***************************************************************

