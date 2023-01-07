// const sayi=32;
// if(sayi%2===0){
//     console.log(`${sayi}Çift sayidir.`);
// }
// else{
//     console.log(`${sayi} Tek sayidir.`);
// }

// const sayi0 =55;
// 0<sayi0&& sayi0<100? console.log(`${sayi0} saglar`): console.log(`${sayi0} saglamaz`);

// const numara = Number(
//   prompt("Lütfen kacinci günü istiyorsaniz sayisini yaziniz")
// );
// switch (numara) {
//   case 0:
//     console.log("pazar");
//     break;
//   case 1:
//     console.log("pazartesi");
//     break;
//   case 2:
//     console.log("sali");
//     break;
//   case 3:
//     console.log("carsamba");
//     break;
//   case 4:
//     console.log("persembe");
//     break;
//   case 5:
//     console.log("cuma");
//     break;
//   case 6:
//     console.log("cumartesi");
//     break;
//   default:
//     console.log("Yanlis deger");
//     break;
// }

// const graduate=Number(prompt("Lütfen notunuzu giriniz"));
// if (graduate > 90&& graduate<=100) {
//   console.log(`${graduate} harf notunuz AA `);
// } else if (graduate == 90 || (graduate > 80 && graduate <= 100)) {
//   console.log(`${graduate} harf notunuz BA`);
// } else if (graduate == 80 || (graduate > 70 && graduate <= 100)) {
//   console.log(`${graduate} harf notunuz BB`);
// } else if (graduate == 70 || (graduate > 60 && graduate <= 100)) {
//   console.log(`${graduate} harf notunuz BC`);
// } else if (graduate == 60 || (graduate >= 50 && graduate <= 100)) {
//   console.log(`${graduate} harf notunuz CC`);
// } else if (graduate == 50 || (graduate > 40 && graduate <= 100)) {
//   console.log(`${graduate} harf notunuz CD`);
// } else if (graduate == 40 || (graduate > 30 && graduate <= 100)) {
//   console.log(`${graduate} harf notunuz DD`);
// } else if (graduate <= 30 ) {
//   console.log(`${graduate} harf notunuz FF`);
// } else {
//   console.log(`${graduate} not degeriniz harf notuna uygun degil`);
// }

// const year = Number(prompt("Lütfen yili giriniz"));
// if(year%4==0&& year%100!=0 || year%400==0){
//    console.log(`${year} artik yildasiniz `);
// }
// else{
//     console.log(`${year} artik yilda degilsiniz `);
// }


const ay = Number(prompt("Lütfen ay giriniz"));
const yil = Number(prompt("Lütfen yil giriniz"));
if (ay == 2) {
  if (yil % 400 === 0 && yil % 4 === 0 && yil % 100 !== 0) {
    console.log(`${yil} yilini ${ay} 29 ceker`);
  } else {
    console.log(`${yil} yilini ${ay} ayi 28 ceker `);
  }
} else if (
  ay == 1 ||
  ay == 3 ||
  ay == 5 ||
  ay == 7 ||
  ay == 8 ||
  ay == 10 ||
  ay == 12
)
  console.log(`${yil} yilini ${ay} ayi 31 ceker `);
else if (
  ay == 4 ||
  ay == 6 ||
  ay == 9 ||
  ay == 11 
 
)
  console.log(`${yil} yilini ${ay} ayi 30 ceker `);


