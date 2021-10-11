// Object is nothing but a key value pair both can be of any data type
/*
 If there is value in front of key : value is called as a property
 If there is a function in front of key than value is referred as method
*/
let obj = {
    name : "Hemant",
    age : 20,
    hobby : ["dancing","singing","music listening"],
    job : function (){
        return "Software developer";
    },
    address : {
        city : "rewari",
        state :"haryana"
    }
};

// To access the values
console.log(obj.name);
console.log(obj.job());
console.log(obj.address.city);

// Updating values in any object... Let us change my age to 24
obj.age = 24;
console.log(obj.age);

// To delete a praticular property
delete obj.hobby;

//Another way to access values
/*
    One another way is using object["key"]
    It is same as object.key
    But the oncly difference is that in the first method it treats after dot as key
    But in 2 part it first gets the value stored in the variable and then  finds it in the object.
*/

//console.log(obj.age);
//console.log(obj["age"]);

// We can also use loop to get all the key value pairs.
for(key in obj){
    console.log(key," is key and ",obj[key], "is value");
}