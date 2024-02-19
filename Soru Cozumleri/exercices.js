//? +++++++++++++++++ SORULAR +++++++++++++++++++++++++

//! 1. Soru: Bir kullanıcının adını ve soyadını alıp, bunları "Soyadı, Adı" formatında birleştirmek istiyorsunuz. Ancak, ad ve soyad başlangıçta küçük harflerle girilmiş olabilir. İlk harfleri büyük harf yaparak bu formatlamayı nasıl gerçekleştirirsiniz?
// isimFormatla(ad, soyad); // "Yılmaz, Ahmet"
//? -----------------------------------------------------------

function isimFormatla(ad, soyad) {
    
  
    return (`${ad.charAt(0).toUpperCase() + ad.slice(1)} ve ${soyad.charAt(0).toUpperCase() + soyad.toLowerCase().slice(1)}`)
}

 const format = isimFormatla("ali", "yilmAz")
console.log(format);

let ferit = "Dunya"
console.log();


//? +++++++++++++++++ SORULAR +++++++++++++++++++++++++

// 2. Soru: Bir metin içindeki türkçe karakterleri ingilizce karakterlerle değiştirip metni dönen js fonksiyonu yazınız?
//! input :"Pijamalı hasta, yağız şoföre çabucak güvendi.";
//! output : // Pijamali hasta, yagiz sofore cabucak guvendi.
//? -----------------------------------------------------------


const text = "Pijamalı hasta, yağız şoföre çabucak güvendi.";


function replaceToEngText(str) {
    let karakterler = {
        'ğ': 'g',
        'ü': 'u',
        'ş': 's',
        'ı': 'i',
        'ö': 'o',
        'ç': 'c',
        'Ğ': 'G',
        'Ü': 'U',
        'Ş': 'S',
        'İ': 'I',
        'Ö': 'O',
        'Ç': 'C'
    };
    return str.replace(/[ğüşııöçĞÜŞIİÖÇ]/g, function(match) {
        return karakterler[match];
    });
}

const inputMetin = "Pijamalı hasta, yağız şoföre çabucak güvendi.";
const outputMetin = replaceToEngText(inputMetin);
console.log(outputMetin); 





// 3. Soru: İki sayı dizisi içindeki ortak elemanları bulup yeni bir dizi oluşturun?
// input : [1, 2, 3, 4, 5], [3, 4, 5, 6, 7]
// output : [3, 4, 5]







// 4. Soru: Soru: Bir dizideki sayıların karelerinden çift sayıların iki katlarının toplamını bulun.
// input : [1, 2, 3, 4, 5]
// output : 28


// 5. Soru: Verilen bir diziyi tersine çevirin, ancak yalnızca forEach kullanarak yapın (reverse() kullanmadan).