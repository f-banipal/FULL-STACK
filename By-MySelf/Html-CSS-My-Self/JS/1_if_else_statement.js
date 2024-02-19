// Hour
// If hour is between 6am and 12pm: Good morning!
// If it is  between 12pm and 6pm: Good afternoon!
// Otherwise: Good evening!

let hour = 13;

if (hour >= 6 && hour <12) 
  console.log('Good morning');

else if (hour >= 12 && hour < 18) 
  console.log('Good afternoon');

else
    console.log('Good evening')


// EXEMPLE II

let age = 5;

if (age >= 18) {
    console.log("You are old enough to enter this site")
}
else  {
console.log("You must wait a few years more...")
}

// EXP. III

let isStudent = false;

if (isStudent) {
    console.log("You are a student")
}

else {
    console.log("You are NOT a student")
}

// EXP. IV 

let ages = 10;
let haslicence = 1;

if(ages >= 16) {
    console.log("You are old enough to drive");
    if(haslicence){
        console.log("You have your licence");
    }

    else{
        console.log("You do NOT have your licence yet!");
    }
}
else{
    console.log("You must be 16+ to have a licence");
}

// let age1 = 140;

// if(age1 >= 14){
//     console.log("You are old enough to enter this cite");
// }
// else if(age1 < 0){
//     console.log("Your age can't be like this");
// }
// else if(age1 >= 100){
//     console.log("Your are TOO OLD to enter this site");
// }
// else{
//     console.log("You must be 18+ to enter this site");
// }


let yas = 19;

if (yas >= 18) {
    
    if (yas >= 100) {
        console.log("You are TOO OLD to enter this site");
    } 
    else{
    console.log("You are old enough to enter this site");
    }
} 

else if (yas >= 0) {
    console.log("You must be 18+ to enter this site");
    } 

else {
    console.log("Your age can't be like this");
}