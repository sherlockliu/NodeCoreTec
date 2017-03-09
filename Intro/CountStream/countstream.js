/**
 * Created by user on 2017/2/8.
 */
var Writable = require('stream').Writable;
var util = require('util');

function CountStream(matchText, options) {
    Writable.call(this, options);
    this.count = 0;
    this.matcher = new RegExp(matchText, 'ig'); //<co id="callout-intro-countstream-2" />
}

CountStream.prototype._write = function(chunk, encoding, cb) {
    var matches = chunk.toString().match(this.matcher); //<co id="callout-intro-countstream-3" />
    if (matches) {
        this.count += matches.length;
    }
    cb();
};

CountStream.prototype.end = function() {
    this.emit('total', this.count); //<co id="callout-intro-countstream-4" />
};

util.inherits(CountStream, Writable); //<co id="callout-intro-countstream-1" />

module.exports = CountStream;
