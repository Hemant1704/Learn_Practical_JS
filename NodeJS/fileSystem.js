let  fs = require("fs");
// Dealing with concepts of file and folder
// Operations like create update delete

// give us data in form of binary buffer 
let buffer = fs.readFileSync("os.js");

// If i use ,buffer data will be printed in binary format
// But if i use concat using + the normal content will appear
console.log("bin data "+buffer);

/*
WE are going to learn both about files and folders in this
files ==> [create,read,update,delete]
a) create:
 i) fs.openSync("myfile.txt","w");  ==> creates an empty file in writing mode
 ii) fs.writeFileSync("abc.txt","i am happy today");  it replaces content of the file
 if the file does not exist it creates a new file.

 iii) fs.appendFileSync("abc.txt","add this to data") ==> same as upper one just it adds content instead of replacing
  

  For folders
  i) to create we use fs.mkdirSync ("myDirectory");
  ii) To remove 
  first use readdirSync() it gives us all the content inside the folder in form of array
  Removing folder meri directory
  let content = readdirSync();
  for(let i=0;i<content.length;i++){
    Remove file one by one using unlink sync
    fs.unlinkSync("meridirectory/"+content[i]);
  }
  fs.rmdirSync("meridirectory");
  Now the folder is removed.
  
  iii) To check if a file exists at any location fs.existSync() ==> returns boolean value

  */

  // let us do a code to which makes 10 folders and eeach folder having its own readme file which contains content related to it.

  for(let i=0;i<10;i++){
      let pathTomake = `Lecture-${i}`;
      // make folder for the lecture
    fs.mkdirSync(pathTomake);

    // creating readme file and putting content in it.
    fs.writeFileSync(pathTomake+"\\"+"readme.md",`# readme for lecture ${i}`);
  }