'use strict';

var fs = require('fs');
/* 异步读取文件 */
/*
fs.readFile('resources/s_1_sample.txt', 'utf-8', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

fs.readFile('s_2_log.png', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
        console.log(data.length + ' bytes');

        // Buffer -> String
        var text = data.toString('utf-8');
        console.log(text);
        // String -> Buffer
        var buf = Buffer.from(text, 'utf-8');
        console.log(buf);
    }
});*/

//同步读文件
/*
var data = fs.readFileSync('resources/s_1_sample.txt', 'utf-8');
console.log(data);

try {
    var data = fs.readFileSync('resources/s_1_sample.txt', 'utf-8');
    console.log(data);
} catch (err) {
    // 出错了
    console.log(err);
}
*/
// 写文件
/*
var data = 'Hello, Node.js';
fs.writeFile('resources/s_3_output.txt', data, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('ok.');
    }
});*/

//果我们要获取文件大小，创建时间等信息，可以使用fs.stat()，它返回一个Stat对象，能告诉我们文件或目录的详细信息：
fs.stat('resources/s_1_sample.txt', function (err, stat) {
    if (err) {
        console.log(err);
    } else {
        // 是否是文件:
        console.log('isFile: ' + stat.isFile());
        // 是否是目录:
        console.log('isDirectory: ' + stat.isDirectory());
        if (stat.isFile()) {
            // 文件大小:
            console.log('size: ' + stat.size);
            // 创建时间, Date对象:
            console.log('birth time: ' + stat.birthtime);
            // 修改时间, Date对象:
            console.log('modified time: ' + stat.mtime);
        }
    }
});