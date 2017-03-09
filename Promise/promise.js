/**
 * Created by user on 2017/2/24.
 */

let promise = new Promise(function(resolve, reject) {
    console.log('Promise');
    resolve();
});

promise.then(function() {
    console.log('Resolved.');
}).then(()=>{ console.log('done.');throw new Error('err')}).catch((err)=>{
    "use strict";
    //console.log(err);
});

console.log('Hi!');
