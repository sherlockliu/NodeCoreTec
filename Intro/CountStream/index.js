/**
 * Created by user on 2017/2/8.
 */

var CountStream = require('./countstream'); //<co id="callout-intro-countstream-index-1" />
var countStream = new CountStream('book'); //<co id="callout-intro-countstream-index-2" />
var https = require('https');

https.get('https://www.jd.com', function(res) { //<co id="callout-intro-countstream-index-3" />
    res.pipe(countStream); //<co id="callout-intro-countstream-index-4" />
});

countStream.on('total', function(count) {
    console.log('Total matches:', count);
});

countStream.on('total', function(count) {
    console.log('so many:', count);
});
