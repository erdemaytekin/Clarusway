// * ============================================
// *            NESTED LOOPS
// * ============================================

// console.log("** NESTED FOR **");
// for(let i=0;i<3;i++){
//     for(let j=0;j<2;j++){
//         console.log(i,j);
//     }
// }



//   let result;
// 10+10 kere doner
// for( let row=1;row<10;row++){
// console.log(row);
// }
//     for(let coloumn=1;coloumn<10;coloumn++){
//    console.log(coloumn);
// }

  let result;
  // 10/10*10 kere doner
let line=""
  for( let row=1;row<=10;row++){
    for(let col=1;col<=10;col++){
   result=col*row;
   line+=result + "\t"; //? /t bir tab bosluk ekler
//    console.log(line);
   
}
// console.log("-");
line+="\n"
console.log(line);
}

