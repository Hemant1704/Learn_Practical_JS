/*
There are 2 kind of strings:
doubleQuote str = "my name is hemant";
singleQuote str = 'my name is hemant';

Now let us see some important functions of the string.

a) str.charAt(i) ==> gives the char at index i

b) str.charCodeAt(i) ==> Gives the ascii code value at index i

c) str.substring(start,end) ==> gives the substring starting from start to end-1

d) str.trim() ==> removes the white spaces from front and back of the string

e) str.split("basis") ==> splits the string and return string array

f) array.join("basis") ==> return a string joined by basis.

*/

let str = "My name is hemant";
let c = str.charAt(3);
console.log("char at ",3," is ",c);

let str2 = "    my name is hemant   ";
//removing spaces 
console.log(str2.trim());
// splitting my name is hemant on the basis of " "
let arrayStr = str.split(" ");
console.log(arrayStr);

// joining the array back with +
console.log(arrayStr.join(" + "));


