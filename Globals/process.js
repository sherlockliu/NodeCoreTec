/**
 * Created by user on 2017/2/14.
 */

//run with: cat file.txt | node process.js on unix
//run with: type file.txt | node process.js on windows, but not working

process.stdin.resume();
//process.stdin.setEncoding('utf8');

process.on('data',(text)=>{
    "use strict";
    process.stdout.write(text.toUpperCase());
    console.log('called.');
});

console.log('process called.');


