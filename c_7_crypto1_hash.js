'use strict';

const crypto = require('crypto');

const hash = crypto.createHash('md5');
// const hash = crypto.createHash('sha1');
// const hash = crypto.createHash('sha256');
const hash1 = crypto.createHash('md5');
const hash2 = crypto.createHash('md5');

// update()方法默认字符串编码为UTF-8，也可以传入Buffer。

// 如果要计算SHA1，只需要把'md5'改成'sha1'，就可以得到SHA1的结果。

// 还可以使用更安全的sha256和sha512。

hash1.update('Hello, world!');
// 仅可调用一次digest()
console.log(hash1.digest('hex'));
// console.log(hash1.digest('latin1'));
// console.log(hash1.digest('base64'));

hash2.update('Hello, nodejs!');
console.log(hash2.digest('hex'));
// console.log(hash2.digest('latin1'));
// console.log(hash2.digest('base64'));

// 可任意多次调用update():
console.log(hash.update('Hello, nodejs!').update('Hello, world!').digest('hex')); // 7e1977739c748beac0c0fd14fd26a544
// console.log(hash.digest('latin1'));
// console.log(hash.digest('base64'));