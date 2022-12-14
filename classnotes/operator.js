// // * =======================================================
// // *                 ARİTMETİK OPERATÖRLER
// // * =======================================================

// // console.log(" **** Operators ****");
// // const cola = 20;
// // const gumm = 5;
// // const biscuits = 15;
// // const totalPrice = cola + gumm + biscuits;
// // console.log("Total Price:" + totalPrice);
// // console.log("Total Price:", totalPrice); // ikiside olur
// // const comments = 50 + 40 + "TL"; // string gelene kadar 50 ile 40'ı topladı
// // console.log(comments);
// // const comment = "TL" + 50 + 40 + "TL";
// // console.log(comment); // TL5040TL olarak çıkar.

// // const s1 = 5;
// //   s2 = 7;
// //   s3 = "4";
// //   s4="three"

// //   console.log(s1+s2+s3); // s1 ile s2 topladı diğerini yanına yazdı.124
// //   console.log(s2-s3); //stringte olsa çıkarma yapar //3
// //   console.log(s2*s3);//çarpma
// //   console.log(s2/s3);// ve bölme de yapar

// //   const difference=s1-s4;
// //   console.log(isNaN(difference));//true

// //   //?Ornek
// // //?
// // const yearOfBirth=1990
// // const name="Jane";
// // console.log(name+" is "+(2022-yearOfBirth)+" years old");
// // console.log(name + " is " + (new Date().getFullYear() - yearOfBirth) + " years old");

// // const date= new Date() // şimdiki zamanı gösteriyor
// // console.log(date);
// // //! ========== Template Literals ============
// // //? 3 sekilde de string tanimlanabilir.

// // const message1 = "Merhaba Javascript"
// // const message2 = "Merhaba Javascript"
// // const message3 = `Merhaba Javascript` //? Template literals

// // console.log(`${name} is ${2022 - yearOfBirth}
// // years old`)

// // //* CARPMA VE US ALMA (MULTİPLY,POW)

// // //?
// // const pi=3.14;
// // // const r=+prompt("Please enter r:");7
// // // console.log(r); // String olarak alır çünkü default olarak string alır. Prompt önüne + koyunca number olarak değerlendirir.Veya başına Number yazılır
// // const r=Number(prompt("Please enter r:"));
// // console.log(r);
// // const square=pi*r*r;
// // console.log(`Square of Circle: ${square}`);
// // console.log(`Square of Circle: ${square.toFixed(3)}`);
// // console.log(`Square of Circle: ${Math.floor(square)}`);
// // console.log(`Square of Circle: ${Math.ceil(square)}`);
// // console.log(`Square of Circle: ${Math.trunc(square)}`);
// // console.log(`Square of Circle: ${Math.round(square)}`);
// // //?Bazi fonksiyonlar5
// // // Math.floor();  //* her zaman en yakin alt tamsayiya yuvarlar
// // // Math.ceil();  //* her zaman en yakin ust tam tamsayiya yuvarlar
// // // Math.trunc(); //* sayinin tam kismini alir.
// // // Math.round(); //* en yakin tam sayiya yuvarlar.
// // // Math.random(); //* 0 ve 1 arasında rasgele sayi uretir.

// // const randomNumber=Math.random();
// // console.log(randomNumber*100); // 0-100 arasında sayı gelmesi için 100'le çarptık.

// // //* ARTTIRMA VE AZALTMA (INC,DEC)
// //*--------------------------------
// let a = 5;
// a++;
// console.log(a++);
// y = a + 5;
// console.log(y);

// let z = 4;
// z += 5;
// console.log(z);

// let k = 20;
// k -= 10;
// console.log({ k });

// //? Ornek : 3 katini alma
// let b = 4;
// b = b * 3;
// b *= 3;
// console.log({ b });

// //* MOD
// //*------------------------------
// // const number = prompt("Please enter a 3-digits number:");
// // const ones = number % 10;
// // const tens = Math.floor(number / 10) % 10;
// // const hundreds = Math.trunc(number / 100);
// // console.log(`Hundreds:${hundreds},Tens${tens},Ones${ones}`);
// // * =====================================================================
// // *                 KARSILASTIRMA OPERATORLERİ
// // *======================================================================
// const num1 = 3;
// console.log(num1 == 3); // true
// console.log(num1 === 3); //true
// console.log(num1 === "3"); //false

// const num2 = "3";
// console.log(num1 == num2); // true
// console.log(num1 != num2); // false

// const num3 = 5;
// const num4 = "1";
// console.log(num1 > num2); //false
// console.log(num1 <= num3); //true
// console.log(num2 > num4); //"3"> "1".ASCII'ye gore kıyaslama yapılır.

// // * =====================================================================
// // *                 MANTIKSAL OPERATORLER
// // *======================================================================

const v1 = true;
const v2 = false;

// console.log(v1 && v2); //false
// console.log(v1 || v2); //true
// console.log(!v1); //false

// const age = prompt("Please enter your age");
// const healthy = confirm("are you healthy"); // evet veya hayır(true veya false girmene izin verir)
// console.log(age, healthy);

// if (age >= 18 && healthy == true) {
//   console.log("Ehliyet alabilir");
// // } else {
//   console.log("Ehliyet alamaz");
// }
// //? Javascripte surekli falsy alan 6 deger bulunmaktadir.
const nal = null;
const tanimsiz = undefined;
const bos = "";
const falsy=false;
const sifir=0;
const sayiDegil=NaN;
console.log(Boolean(5));//true
console.log(Boolean(0));//false

console.log(v1&&null);//null
console.log(v1&&0);//0
console.log(v1||0);//true
console.log(v1&&4&&true&&5);//5

const num5=0;
if(num5==true){
    console.log("sayi sifir degildir");
}
else{
    console.log("sayi sifirdir");
}

// // * =====================================================================
// // *                 TIP DONUSUMLERI
// // *======================================================================

const dolar="1000";
const tl="5000";

const totalMoney= Number(dolar)+Number(tl);// modern javascripte bu kullanılıyor.
const totalMoney1 =+(dolar) + +(tl);
const totalMoney2 = parseInt(dolar) + parseInt(tl);
const totalMoney3 = parseFloat(dolar) + parseFloat(tl);
console.log(totalMoney);
console.log(totalMoney1);
console.log(totalMoney2);
console.log(totalMoney3);

console.log(Number(null));//0
console.log(Number(""));//0
console.log(Number("12.3"));//12.3
console.log(Number("1ab"));//NaN
console.log(Number("0b101"));//5 (binary sayi sistemi)
console.log(Number(0x10));//16 (hex sayi sistemi)

