// declaring array
// In Js arrays can store any kind of data type
// We can even store data of different dtype in same array.
let array = [1,2,3,4,5];
console.log(array);

// for loop use is similar to java
for(let i=0;i<array.length;i++){
    console.log("Element at ",i," is ",array[i]);
}

/*
Some important functions in array
array.push(value) ==> adds the value to thr last of the array.

array.unshift(value) ==> adds the value to the starting of the arary.

array.pop() ==> removes the value from the last of the array.

array.shift() ==> removes the value from the starting of the arary.

array.slice(start_index,end_index) ==> Return the copy of part of the array will gicve upto end-1 index
Also the original array will not be changed.

array.splice(starting_index,number of elements) ==> REmoves the number from the given index(including).
It changes the original array.

array.indexOf(value) ==> tells the index of the value element in the array.

array.contains(value)==> return boolean value whether the element is present in the array or not.
*/

array.push("Ending");
array.unshift("Starting");
console.log(array);

array.pop();
array.shift();
console.log(array);

array.splice(1,3);
console.log(array);