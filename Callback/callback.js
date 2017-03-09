/**
 * Created by user on 2017/3/1.
 */

function main(){
    "use strict";
    fnA(()=>{
        console.log('fnA callback called.')
        fnB(()=>{
            console.log('fnB callback called.');
        })
    })
}

function fnA(callback){
    "use strict";
    console.log('fnA called.');
    callback();
}


function fnB(callback){
    "use strict";
    console.log('fnB called.');
    callback();
}


main();