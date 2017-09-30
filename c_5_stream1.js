'use strict';

var fs = require('fs');

// // 打开一个流:
// var rs = fs.createReadStream('resources/s_1_sample.txt', 'utf-8');
// /*data事件表示流的数据已经可以读取了，end事件表示这个流已经到末尾了，没有数据可以读取了，error事件表示出错了。*/
// rs.on('data', function (chunk) {
//     console.log('DATA:')
//     console.log(chunk);
// });

// rs.on('end', function () {
//     console.log('END');
// });

// rs.on('error', function (err) {
//     console.log('ERROR: ' + err);
// });

// 要以流的形式写入文件，只需要不断调用write()方法，最后以end()结束：
// var ws1 = fs.createWriteStream('resources/output1.txt', 'utf-8');
// ws1.write('使用Stream写入文本数据...\n');
// ws1.write('END.');
// ws1.end();

// var ws2 = fs.createWriteStream('resources/output2.txt');
// ws2.write(new Buffer('使用Stream写入二进制数据...\n', 'utf-8'));
// ws2.write(new Buffer('END.', 'utf-8'));
// ws2.end();

// pipe
// 一个Readable流和一个Writable流串起来后，所有的数据自动从Readable流进入Writable流，这种操作叫pipe。
var rs = fs.createReadStream('resources/s_1_sample.txt');
var ws = fs.createWriteStream('resources/s_5_copied.txt');

rs.pipe(ws);