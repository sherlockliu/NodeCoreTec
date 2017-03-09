/**
 * Created by user on 2017/2/14.
 */

function Bomb() {
    this.message = 'Boom!';
}

Bomb.prototype.explode = function () {
    console.log(this.message);
};

var bomb = new Bomb();

//setTimeout(bomb.explode.bind(bomb), 1000); //<co id="callout-settimeout-2-1" />

var timeoutId = setTimeout(Bomb.prototype.explode.call(bomb), 2000);

clearTimeout(timeoutId); //<co id="callout-settimeout-3-1" />



