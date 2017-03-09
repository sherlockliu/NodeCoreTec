/**
 * Created by user on 2017/2/16.
 */

function sync(cb){
    "use strict";
    console.log('sync called.');
    cb();
}

function  async(cb){
    "use strict";
    console.log('async called.');
    process.nextTick(()=>{
        cb();
    })
}

//sync(()=>{
//    "use strict";
//    console.log('1 step.');
//    sync(()=>{
//        console.log('3 step.')
//    })
//})
//
//console.log('2 step.');

async(()=>{
    "use strict";
    console.log('async 2.');
    async(()=>{
        console.log('async 3.')
    })
})

console.log('async 1.');
console.log(process.maxTickDepth);//version problem?