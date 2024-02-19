/* *****************************************************/
//!EXERCICE - 1
/*******************************************************/

/* ============================================================*/
//?    1. Declare an empty array;
/* ===========================================================*/

let emptyArray = [];
console.log(emptyArray); // []



/* ============================================================*/
//?    2. Declare an array with more than 5 number of elements
/* ============================================================*/

let firstArray = ['1', '2', '3', '4', '5', '6'];
console.log(firstArray);  // ['1', '2', '3', '4', '5', '6']



/* ============================================================*/
//?    3. Find the length of your array
/* ============================================================*/
console.log(firstArray.length);  // 6



/* ============================================================*/
//?    4. Get the first item, the middle item and the last item
//?       of the array
/* ============================================================*/

let firstArray1 = ['1', '2', '3', '4', '5', '6'];
let firstArray2 = ['1', '2', '3', '4', '5'];

console.log(firstArray1[0]);  // 1 : first Item



if (firstArray1.length%2 == 0){
    console.log(`There are ${firstArray1[firstArray1.length/2-1]}, ${firstArray1[firstArray1.length/2]} in the middle.`);
}else{
    console.log(firstArray1[Math.floor(firstArray1.length/2)]);  // 2 middle items
}

// 1 middle item
if (firstArray2.length%2 == 0){
    console.log(`There are ${firstArray2[firstArray2.length/2-1]}, ${firstArray2[firstArray2.length/2]} in the middle.`);
}else{
    console.log(`The middle item is ${firstArray2[Math.floor(firstArray2.length/2)]}.`);
}

console.log(firstArray1[firstArray1.length-1]);  // last item : 6




/* ============================================================*/
//?    5. Declare an array called mixedDataTypes, put different data   
//?    types in the array and find the length of the array. The array  
//?    size should be greater than 5
/* ============================================================*/

let mixedDataTypes = [1, '5.5', true, 'Ferit', ["JS", "Python", "C++"], {isim: "Ferit", soyIsim: "Banipal", yas: "40"}, [], {}, [""], {selam :" "}];

console.log(mixedDataTypes);
console.log(typeof(mixedDataTypes)[0]);





/* ============================================================*/
//?    6. Declare an array variable name itCompanies and assign 
//?       initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
/* ============================================================*/

const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]




/* ============================================================*/
//?    7. Print the array using console.log()
/* ============================================================*/

console.log(itCompanies);





/* ============================================================*/
//?    8. Print the number of companies in the array
/* ============================================================*/

console.log(`The number of this array is: ${itCompanies.length}.`);



/* ============================================================*/
//?    9. Print the first company, middle and last company
/* ============================================================*/

//! First element: Facebook

console.log(`The first company name is: ${itCompanies[0]}`);  // indekleme ile
// console.log(itCompanies.shift());  // shift() yontemi ile
// console.log(itCompanies);  // shift() yontemi ile ilk eleman silinir ve silinen deger dondurulur.

//! Middle Element : Apple

if (itCompanies.length%2 == 0){
    console.log(`The middle companies names are: ${itCompanies[itCompanies.length/2-1]} and ${itCompanies[itCompanies.length/2]}.`);
}else{
    console.log(`The middle company name  is: ${itCompanies[Math.floor(itCompanies.length/2)]}`);
}

//! Last Element : Amazon

console.log(`The last company name is: ${itCompanies[itCompanies.length-1]}`);





/* ============================================================*/
//?    10. Print out each company
/* ============================================================*/

for (let i = 0; i < itCompanies.length; i++){  // For Döngüsü İle:
    console.log(itCompanies[i]);
} 

// veya

for (let company of itCompanies){  // For ... of  dongusu ile
    console.log(company);
}

// veya 

itCompanies.forEach(function (company){  // forEach() Fonksiyonu İle:
    console.log(company);
})



/* ============================================================*/
//?    11. Change each company name to uppercase one by one and print them out
/* ============================================================*/

console.log(itCompanies);

itCompanies[0] = "Arcelik"
itCompanies[1] = "Beko"
itCompanies[2] = "TOGG"
itCompanies[3] = "THY"
itCompanies[4] = "Trendyol"
itCompanies[5] = "TeknoSa"
itCompanies[6] = "ASELSAN"

console.log(itCompanies);  // Burada atama yapilarak ilk liste degistirildi.

// veya

const yeniSirketler = ["Arcelik", "Beko", "TOGG", "THY", "Trendyol", "TeknoSa", "ASELSAN"];

const yeniListe = itCompanies.map((company, index) => {
    return yeniSirketler[index];
  });
  
  console.log(yeniListe);  // Burada ise ilk dizi degismedi ama farkli bir degiskene atama yapilarak bu yeni dizi goruntulendi

  console.log(itCompanies);

  const yeniDizi = itCompanies.map(function(yemek, index){
    if (index = 3){
        return "yeni " + yemek;
    }else{
        return yemek
    }
  });
  console.log(yeniDizi);


/* ============================================================*/
//?    12. Print the array like as a sentence: Facebook, Google, Microsoft, 
//?        Apple, IBM,Oracle and Amazon are big IT companies.
/* ============================================================*/

const itCompanies1 = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]

let sentence = itCompanies1.slice(0, -1).join(', ') + ' and ' + itCompanies1[itCompanies1.length - 1] + ' are big IT companies.';
console.log(sentence);




/* ============================================================*/
//?    13. Check if a certain company exists in the itCompanies array. 
//?        If it exist return the company else return a company is not found
/* ============================================================*/
let search = "Arcelik"
if (itCompanies1.includes(search)){
    console.log(`${search} company exists in the itCompanies1 array.`)
}else {
    console.log(`${search} company is not found in the itCompanies1 array :(`);
}



/* ============================================================*/
//?    14. Filter out companies which have more than one 'o' without the filter method
/* ============================================================*/

let filterOut = [];
for (i = 0; i < itCompanies1.length; i++){
    let sirket = itCompanies1[i]
    let oCount = 0

    for  (let j = 0; j < sirket.length; j++){
        if (sirket[j].toLowerCase() === 'o'){
            oCount++;
        }
    }

    if (oCount <= 1){
        filterOut.push(sirket);
    }
}

console.log(filterOut);

// ['Apple', 'IBM', 'Oracle', 'Amazon']




/* ============================================================*/
//?    15. Sort the array using sort() method
/* ============================================================*/


//! Normal Siralama,
// 1. Yontem
console.log(itCompanies1.sort());

// 2. Yontem
console.log(itCompanies1.sort((a, b) => a - b));

// 3. Yontem
itCompanies1.sort(function(a, b){
    return a - b;
});

console.log(`Normal siralama: ${itCompanies1.slice("").join(", ")}.`);

// 4. Yontem
itCompanies1.sort(function(a, b){
    return a.localeCompare(b);
})
console.log(`Normal Siralama : ${itCompanies1.slice("").join(", ")}.`);

//! Tersten siralama:
// 1. Yontem
console.log(itCompanies1.sort((a, b) => b -a));

// 2. Yontem
console.log(itCompanies1.sort().reverse());

// 3. Yontem
itCompanies1.sort(function(a, b){
    return b.localeCompare(a);
})
console.log(`Tersten Siralama : ${itCompanies1.slice("").join(", ")}.`);


/* ============================================================*/
//?    16. Reverse the array using reverse() method
/* ============================================================*/

    const companies16 = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
    console.log(companies16.reverse());


/* ============================================================*/
//?    17. Slice out the first 3 companies from the array
/* ============================================================*/

    // console.log(companies16(0, 3));




/* ============================================================*/
//?    18. Slice out the last 3 companies from the array
/* ============================================================*/



/* ============================================================*/
//?    19. Slice out the middle IT company or companies from the array
/* ============================================================*/

    const companies19 = ["Facebook", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]

    if (companies19.length%2 === 0){
        let middle1 = companies19.length/2
        let bas1 = companies19.slice(middle1)
        
        console.log(`The middle companies are ${companies19.slice(bas1)}`);
    }else {
        console.log(`${Math.floor(companies19.length/2)}`);
    }


/* ============================================================*/
//?    20. Remove the first IT company from the array
/* ============================================================*/
    const companies20 = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
    console.log(companies20.slice(1));





/* ============================================================*/
//?    21. Remove the middle IT company or companies from the array
/* ============================================================*/
    const companies21 = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
    const len = companies21.length;
    const middle = Math.floor(len/2)
    console.log(middle);

    if (len % 2 === 0) {
        companies21.splice(middle-1, 2);
    } else {
        companies21.splice(middle, 1);
    }
    console.log(companies21);


/* ============================================================*/
//?    22. Remove the last IT company from the array
/* ============================================================*/

    companies21.pop()
    console.log(companies21);

    // veya

    companies21.splice(0)
    console.log(companies21);


/* ============================================================*/
//?    23. Remove all IT companies
/* ============================================================*/

let bos = ``
for (let i = 0; i < 3; i++){

    for(let j = 0; j <= i; j++){
    bos += `#`
    console.log(bos);
}
}