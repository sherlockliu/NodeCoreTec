/**
 * Created by user on 2017/2/14.
 */

function tick() {
    console.log('tick:', Date.now());
}

function tock() {
    console.log('tock:', Date.now());
}

setInterval(tick, 1000);

setTimeout(function() { //<co id="callout-globals-setinterval" />
    setInterval(tock, 1000);
}, 500);
