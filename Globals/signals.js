/**
 * Created by user on 2017/2/14.
 */


process.stdin.resume(); //<co id="listing-globals-signals-1" />

process.on('SIGHUP', function () { //<co id="listing-globals-signals-2" />
    console.log('Reloading configuration...');
});

console.log('PID:', process.pid); //<co id="listing-globals-signals-3" />
