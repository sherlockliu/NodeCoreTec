/**
 * Created by user on 2017/2/24.
 */
function sleep(timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            resolve(11);
        }, timeout);
    });
}

(async function() {
    console.log('Do some thing, ' + new Date());
    let data = await sleep(3000);
    console.log('data =,' + data);
    console.log('Do other things, ' + new Date());
})();

