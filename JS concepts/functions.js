// In the intro.js file we studied about very basic things and also the primitive types
// Here we will studey abouth the non primitve types : Functions ,  arrays , objects

// Function definition : the part where we define the function, here we dont have static void and other things
function sayHello(){
    console.log("My name is hemant");
}

// Function call 
sayHello();


/*
To pass a parameter we can simply use the param keyword and pass any kind of parameter to the function
function sayHello(param){
    console.log("Parameter is ",param);
}

I can call this with any kind of parameter
sayHello([1,2,3,4])
sayHello(24)
*/

function printParam(param){
    console.log("Parameter is ",param);
}

printParam([1,2,3,4]);
printParam(24);

/*
This is the benefit in Js that we do not need to  define the function return type
we can return any type of data and pass any number of paramaters.

*/