/**
 * Created by user on 2017/2/16.
 */
var fs = require('fs');

fs.readFile('./names.txt',(err,buf)=>{
    console.log(buf.toString('ascii'));
})
