/**
 * Created by user on 2017/2/24.
 */


var fs = require('fs');
var readFile = function (fileName) {
    return new Promise(function (resolve, reject) {
        fs.readFile(fileName, function (error, data) {
            if (error) reject(error);
            resolve(data);
        });
    });
};
var asyncReadFile = async function () {
    var f1 = await readFile('./names.txt');
    var f2 = await readFile('./names.txt');
    console.log('1:' + f1.toString());
    console.log('2:' + f2.toString());
};
//asyncReadFile();


const posts = [
    {title: 'Post 1', content: 'fake content'},
    {title: 'Post 2', content: 'fake content'},
];
const getPosts = () => new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error('error')), 1000);

});
//
//const printPostsToConsole = () => getPosts().then(posts => console.log(posts));
//printPostsToConsole();
//

const printPostsToConsole = async ()=> {
    try {
        "use strict";
        let posts = await getPosts();
        console.log(posts);
    } catch (e) {
        console.log('catch:');
        console.log(e);
    }
};

printPostsToConsole();

