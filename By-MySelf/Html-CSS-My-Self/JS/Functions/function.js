// function myWorld(){
//     console.log("My world is different then other");

// }

// myWorld()



// function sayHi2() {
//     console.log('Hello!');
// }

// sayHi2(); // Hello!
// console.log(typeof sayHi2()); // undefined

// function sayHi() {
//     return 'Hi!';
// }

// sayHi(); // no output to the console
// console.log(typeof sayHi()); // string
// console.log(typeof sayHi); // function


// function sayHi(userName) {
//     console.log(`Hello! ${userName}`);
// }
// sayHi('Mark');

// sayHi(); // what will be the output?

// function sayHi2(userName, company) {
//     userName = `ben`
//     company = 'Banipal'
//     console.log(`Hello! ${userName} of ${company}`);
//     userName = `Ferit`
//    company = 'Apple';
//     console.log(`Hello! ${userName} of ${company}`);  
// }
// let userName= 'Mark';
// let company = 'Clarusway';
// sayHi2()

// sayHi2(userName, company);
// console.log(company);
// sayHi2('Matthew'); // what will be the output?

// var anObj = { name: 'Matthew'};
// console.log(anObj);
// // {name: "Matthew"}

// function changeObj(obj) {
//     obj.name = 'Mark';
// }
// changeObj(anObj);
// console.log(anObj);
// // {name: "Mark"}

// function changeObj2(obj) {
//     obj = {name: 'Mike'};
// }
// changeObj2(anObj);
// console.log(anObj);
// // {name: "Mark"}

let num1 = 10;
var num2 = 20;
console.log('at the global scope');
console.log({ num1, num2 });
func1();
console.log({ num1, num2 });
console.log({ num3, num4 });

// function declaration
function func1() {
  let num1 = 101;
  let num2 = 102;
  var num3 = 103;
  console.log('..inside func1');
  if (num1 < num2) {
    console.log('inside if block');
    let num1 = 201;
    // var num2 = 205;
    console.log({ num1, num2 });
    console.log({ num3, num4 });
    // let num3 = 206;
    var num4 = 204;
    num1++;
    num2++;
    num3++;
    num4++;
    console.log({ num1, num2 });
    console.log({ num3, num4 });
  }
  console.log('after if block');
  num3++;
  num4++;
  console.log({ num1, num2 });
  console.log({ num3, num4 });
}