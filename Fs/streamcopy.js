/**
 * Created by user on 2017/2/28.
 */
var fs = require('fs');

function copy(dst,src) {
    fs.createReadStream(src).pipe(fs.createWriteStream(dst));
}

function main(argv) {
    copy(argv[0], argv[1]);
}

main(process.argv.slice(2));