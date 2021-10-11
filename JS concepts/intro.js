// Simple printing anything on to the console
console.log("TEsting printing to console : Hello Javascript");

/* declare a variable
    using let : it does not define the data type it just says that there is a variable.
    By default the value stored is undefined.
    we can store any kind of value int it later on.
*/
let a;
console.log("Default value using let is " + a);
a = 10;
a = "Hemant";
console.log("Storing my name : "+a);

/*
Variable types in javascript:
Primitive types are : number, boolean, string, null
Here remember that in js 3/2 is 1.5 not 1 here there is no concept of int and float.
*/

let c = 3;
let d = 2;

console.log("3 divide by 2 is ",(3/2));

/*
Here in Js the syntax is similar to oop languages like Java,C++ 
Concepts like loops and conditional statement are same as them.
Let us take an example
*/

// printing numbers from 1 to 10
for(let i=1;i<=10;i++){
    console.log("Number is ",i);
}

// Let us do another problem to find if any number is prime

let number = 23;
let flag = true;
for(let i=2;i<number;i++){
    if(number%i==0){
        flag = false;
        break;
    }
}
if(flag){
    console.log(number," is a prime number");
}
else{
    console.log(number,"is not prime");
}


