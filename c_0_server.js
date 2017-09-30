var http = require('http');
var data = '{ "employees": [{ "firstName": "Bill", "lastName": "Gates" }, { "firstName": "George", "lastName": "Bush" }, { "firstName": "Thomas", "lastName": "Carter" }] }';
http.createServer(function (request, response) {

    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200, { 'Content-Type': 'text/html;charset=UTF-8' });
    // response.setHeader();
    response.write("<title>测试用json</title>");

    // 发送响应数据 "Hello World"
    response.end(data);
}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');