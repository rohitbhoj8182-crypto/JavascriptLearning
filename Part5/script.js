//loops ->repeat a block of code multiple times until a certain condition is met

//for while foreach do while


//kaha se jana hai -> kaha tak jana hai -> kya karna hai
for (let i = 0 ; i < 5; i++) {
    console.log("for loop iteration: " + i);
}


//while loop -> kahan se jana hai ->kaha rukna hai -> kya karna hai 
let i = 0;
while (i < 5) {
    console.log("while loop iteration: " + i);
    i++;
}

//do while loop -> kya karna hai ->kaha rukna hai ->kahan se jana hai
let j = 0;
do {
    console.log("do while loop iteration: " + j);
    j++;
} while (j < 5);

//break and continue
for (let k = 0; k < 10; k++) {
    if (k === 5) {
        console.log("Breaking the loop at k = " + k);
        break; // exit the loop when k is 5
    }
    console.log("Loop iteration with break: " + k);
}


for (let i =1 ; i <= 10 ; i++){
    console.log(i);
}

//1-10 using while
 
let x  = 0 ;
while (x < 10){
    x++;
    console.log(x);
}

