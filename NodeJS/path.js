let path = require("path");
/*
So node js gives us a module named path in order to provide many functionalities related to path
and also resolve many issues.
Issues for example 
i) suppose i make a file named abc def.js (space between abc and def)
and then i try to run the file using node abc def.js than it will show
error as node does not allow space to do it we need to write like node "abc def.js"

ii) Also according to various operating system the slash may vary some have forward slash 
and some have backward.
So all suchb scenarios are handled by this modeule named path
*/


// To start this i am going to take the same code sample i did in the last fileSystem file.
// But this time we are going to use the path module.

for(let i=0;i<10;i++){
    let pathTomake = `Lecture-${i}`;
    // make folder for the lecture
  //fs.mkdirSync(pathTomake);

  // creating readme file and putting content in it.
  // Now intead of + we are going to use the path.join() as it will join the path according to the os
  // But the way we did it previously we just added  / which might not work in some os.
  // Previous way : fs.writeFileSync(pathTomake+"\\"+"readme.md",`# readme for lecture ${i}`);
  //fs.writeFileSync(path.join(pathTomake,"readme.md"),`# readme for lecture ${i}`);
}

/*
__dirname is the current directory we are working in.
Some mote useful functions
i) path.extname(__dirname);==> gives the extension name of the path we have given example .pdf, .js
ii) path.basename(__dirname); ==> gives the last location of the path we have given
*/

// will give me the complete path of the current location
console.log(__dirname);

let name = path.extname(path.join(__dirname,"abc.js"));
// will give .js
console.log(name);

// will give me the folder name i am in ==> NodeJS
name = path.basename(__dirname);
console.log(name);

name = path.basename(path.join(__dirname,"abc.js"));
// will print abc.js as it is the last location
console.log(name);