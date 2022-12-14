// // * =====================================================================
// // *                 KARAR YAPILARI
// // *======================================================================

// const yas=prompt()
// if(yas<=3){
//     console.log("Bebeksiniz");
// }
// else if(yas>18,yas<=12){
// console.log("çocuksunuz");}
// else{
//     console.log("yetiskinsiniz");
// }

// const num=Number(prompt("Please enter a number"));
// console.log(typeof num);
// if(num>0){
//     console.log(`${num} is positive`);
// }
// else if (num < 0) {
//   console.log(`${num} is negative`);
// }
// else{
//   console.log(`${num} is equal to zero`);
// }

// //?Ornek2:Consele'dan 3 tane tam sayinin en buyugunu bulma

// const n1=Number(prompt("Number1:"));
// const n2 = Number(prompt("Number2:"));
// const n3 = Number(prompt("Number3:"));

// //* 1.Yontem
// if(n1>=n2&&n1>=n3){
// console.log(`${n1} is biggest number`);
// }
// else if(n2>=n3 && n2>=n1){
//     console.log(`${n2} is biggest number`);
// }
// else if(n3>=n2&&n3>=n1){
//     console.log(`${n3} is biggest number`);
// }

// //* 2.Yontem
// Math.max(n1,n2,n3);
// console.log(`The Biggest:${Math.max(n1,n2,n3)}`);

//  //* 3.Yontem
// let biggest=n1;
// if(n2>=biggest){
//     biggest=n2
// }
// if(n3>=biggest){
//     biggest=n3;
// }
// console.log(`${biggest} is a biggest`);
// const year = 11;
// const kidsCount = 3;
// const graduate = true;
// const langCount = 5;

// const increase =
//   year >= 10 && kidsCount >= 2 && graduate == true && langCount >= 2;
// if (increase) {
//   console.log("He or She deserves an increased salary");
// }
//**************** SWITCH-CASE *******************

// console.log("-------------------------------------")
// console.log(" ***** 4 Islem Hesap Makinasi ****** ")
// console.log("-------------------------------------")
// const s1 = Number(prompt("1.Sayiyi Giriniz:"))
// const islem = prompt("Islemi giriniz: +,-,*, /")
// const s2 = +prompt("2.Sayiyi Giriniz:")
// let sonuc = 0
// switch (islem) {
//   case "+":
//     sonuc = s1 + s2
//     break
//   case "-":
//     sonuc = s1 - s2
//     break
//   case "*":
//     sonuc = s1 * s2
//     break
//   case "/":
//     sonuc = s1 / s2
//     break
//   default:
//     alert("Yanlis islem girisi")
//     break
// }
// console.log(`${s1} ${islem} ${s2} = ${sonuc}`)

//***********************TERNARY ***********************/
// const grade=Number(prompt("Enter a grade"));
// let result=(grade>=50)?
// `You are Succesfull with ${grade}`:
// `You are Failed with ${grade}`
// console.log(result);
const gender = "male";
const age = 18;
const healthy = true;
const status = "teacher";

age >= 18 && gender === "male" && healthy === true && status !== "students"
  ? alert("military service is  required")
: alert("military service is not required")
