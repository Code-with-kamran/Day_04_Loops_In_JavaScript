// Counting from 1 to 10

for(let i = 1; i<=10; i++){
    console.log(i);
}

//Table of 5
for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5*i}`);
    
}

// sum from 1 to 10
let sum = 0;
let j = 1;
while (j<=10) {
    sum += j;
    j++;
}
console.log(sum);

let num = 10;
while (num >= 1) {
    console.log(num);
    num--;
}


// print 1 to 5 
 let k = 1;
 do {
    console.log(k);
    k++;
 } while (k<= 5);

 // fac

 let fac = 1;
 let num1 = 3;
 if (num<0) {
    console.log("invalid input");
 } else if (num1 == 1 || num1 == 0) {
    console.log(`fatorial is 1`);
 }
 else{
    do {
        fac *=num1;
      
        num1--;
     } while (num1 >=1 );
     console.log(`factorial is ${fac}`);
 }


 // pattern
// *
// **
// ***
// ****
// *****


for (let i = 0; i <6; i++) {
    let star = "";
    for (let j = 0; j <= i; j++) {
      star += "*";
        
    }
    console.log(star);
}



// 1 to 10 but not 5
for (let i = 0; i <= 10; i++) {
   if (i == 5) {
    continue;
   }
    console.log(i);
}

// 1 to 10 but stop when num is 7

for (let i = 0; i <= 10; i++) {
    if (i == 7) {
     break;
    }
     console.log(i);
 }