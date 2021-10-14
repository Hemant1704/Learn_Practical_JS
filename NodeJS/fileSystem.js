let  fs = require("fs");
// Dealing with concepts of file and folder
// Operations like create update delete

// give us data in form of binary buffer 
let buffer = fs.readFileSync("os.js");

// If i use ,buffer data will be printed in binary format
// But if i use concat using + the normal content will appear
console.log("bin data "+buffer);

/*
files ==> [create,read,update,delete]
a) create:
 i) fs.openSync("myfile.txt","w");  ==> creates an empty file in writing mode
 ii) fs.writeFileSync("abc.txt","i am happy today");  it replaces content of the file
 if the file does not exist it creates a new file.

 iii) fs.appendFileSync("abc.txt","add this to data") ==> same as upper one just it adds content instead of replacing
 iv) fs.mkdirSync ("myDirectory")

*/