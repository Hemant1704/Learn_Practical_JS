let cp = require("child_process");

/*
Node js contains various modules we can use with the help of javascript.
It allows us to have various functionalitites in our project.


*/
// trying to open calculator
cp.execSync("calc");

// opening website on chrome 
cp.execSync("start chrome https:\\github.com\\");

/*
These commands are similar to what we use in cmd prompt we just need to 
search hbow we do in cmd and do it in nodejs as above.

By this we can run any kind of file using node js - python file,js file
or any java file or any other kind of file.
let output = cp.execSync("node filename.js");

*/