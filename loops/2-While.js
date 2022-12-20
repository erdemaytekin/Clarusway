// * ============================================
// *            DONGULER(LOOPS)- WHILE
// * ============================================
// );

// console.log("****** WHILE *******"
// let count =1;
// while(count<=10){
//     console.log("Count:",count);
//     count++;
// }

// let grade=Number(prompt("Please enter your grade"));
// while(grade<0 || 100<grade){
//     console.log("İncorrect grade");
//    grade = Number(prompt("Grade should be 0-100"));

// }
// console.log(`your grade ${grade}`);

// let counter=0;
// let number=Number(prompt("your number"));
// while(number !=0){
//     number=Math.trunc(number/10);
//     // console.log(number);
//     counter++;
// }
// console.log(`Digit count is ${counter}`);

// * ============================================
// *            DONGULER(LOOPS)- WHILE
// * ============================================
let again = "";
do {
  let avg = 0;
  const midterm = Number(prompt("your midterm grade:"));
  const final = Number(prompt("your final grade:"));
  avg = midterm * 0.4 + final * 0.6;
  console.log(`Your score is ${avg}`);
   again = prompt("Do you want to continue(e/E)");
} while (again === "e" || again === "E");
console.log("See you later.Bye");

