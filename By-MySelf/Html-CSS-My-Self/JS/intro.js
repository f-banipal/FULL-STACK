//? CIKTI ALMAMIZI SAGLAYAN YAPILAR


console.log("intro JS icindeyiz...")
console.error("Hata mesaji")
console.warn("Warning - UYARI")

//! Alert - UYARI OLUSTURMAK ICIN

// alert("Lutfen adinizi giriniz:")

document.write("JavaScript Intro")

// cevap = confirm("Cikmak istediginizden emin misiniz")
// console.log(cevap)


// JAVASCRIPT DEGISKENLERI

x = 15
ad = "Helen"
yas = 40

console.log(ad)

// const and let
// ES6 sonra gelen yapilardir.
// Degisken tanimlama icin kullanilir.

//! CONST
// const : constant : sabit
// const = tckimlik = 12345678901
// Alinacak hata
// 2-variables.js:18 Uncaught TypeError:Ass:

//! LET

let toplam = 0
x = 60
y = 70
toplam = x + y
console.log(toplam)

// GLOBAL ALAN

// Program icinde her ortamdan ulasabilen ortak alandir.

// LOCAL ALAN
// Bir blok icidir. {} ile ifade edilen bolumler bloklardir. if blogu, while, for

// Burasi global alan
const sayi = 5
{
    // burasi local alan
    console.log(sayi)
    const pi = 3.14
    console.log(pi)

}

// console.log(pi)


//! VAR : her yerden erisilebilir ve yeniden tanimlanabilir

var number = 90
{
    console.log(number)
    var number = 50
}

console.log(number)

//? DATA TYPES

// Primitive Data Type : Tek deger veri tutarlar
//? Stack bolumunde tutulur : kucuk veriler
//? null, Undefined, Boolean, Number, String, BigInt

// Non- primitive data type : Birden fazla veri turu barindirirlar.b(Bir treferansa gore)
//? Heab bolumunde tutulur : [] ve { icin}
//? Object :dict 
//? Array : dizi ve list

//! DATA TYPES

//? 1 - PRIMIVITE DATA TYPE
// Tek bir deger tutabilen degiskenler
// Number, string, Null, Undefined, Boolean, BigInt

// a. Numbers (Integer and Float are numbers)

x = 15
console.log(typeof(x))

x = 15.45
console.log(typeof(x))

yas = 40
sayi2 = 56.87
console.log(yas)
sonuc = (sayi2*5) + 6
console.log(sonuc)

const pi = Math.PI
console.log(pi)

// Ondalikli kismi yuvarlamak
// 1. round

let yuvarlanmisSonuc = Math.round(sonuc)
console.log("sonuc: ", sonuc)
console.log(yuvarlanmisSonuc)

// 2.runc
let truncSonuc = Math.trunc(sonuc)
console.log(truncSonuc)

// Virgulden sonra gelen ondalili kisimda kac tane hane gostermesini istiyorsaniz toFixed(sayi)

let fixedSonuc = sonuc.toFixed(2)
console.log(fixedSonuc)
console.log(sonuc.toFixed(2))

//! RANDOM METODU
// RAstgele sayi uretmek icin kullanilir.
// 0-1 arasinda bir sayi uretir.

console.clear()
console.log(Math.random())
console.log(Math.round(Math.random()*100))

console.log(Math.pow(5, 3))
console.log(Math.sqrt(144))





