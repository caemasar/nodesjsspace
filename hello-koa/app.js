// 导入koa，和koa 1.x不同，在koa2中，我们导入的是一个class，因此用大写的Koa表示:
const Koa = require('koa');

// 创建一个Koa对象表示web app本身:
const app = new Koa();

// 对于任何请求，app将调用该异步函数处理请求：
app.use(async (ctx, next) => {
    console.log(`${ctx.request.method} ${ctx.request.url}`); // 打印URL
    await next(); // 调用下一个middleware
});

app.use(async (ctx, next) => {
    const start = new Date().getTime(); // 当前时间
    await next(); // 调用下一个middleware
    const ms = new Date().getTime() - start; // 耗费时间
    console.log(`Time: ${ms}ms`); // 打印耗费时间
});

app.use(async (ctx, next) => {
    await next();
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>Hello, koa2!</h1>';
});

/*每收到一个http请求，koa就会调用通过app.use()注册的async函数，并传入ctx和next参数。

我们可以对ctx操作，并设置返回内容。但是为什么要调用await next()？

原因是koa把很多async函数组成一个处理链，每个async函数都可以做一些自己的事情，

然后用await next()来调用下一个async函数。我们把每个async函数称为middleware，

这些middleware可以组合起来，完成很多有用的功能。 

middleware的顺序很重要，也就是调用app.use()的顺序决定了middleware的顺序。

此外，如果一个middleware没有调用await next()，会怎么办？

答案是后续的middleware将不再执行了。这种情况也很常见，例如，

一个检测用户权限的middleware可以决定是否继续处理请求，还是直接返回403错误：

app.use(async (ctx, next) => {
    if (await checkUserPermission(ctx)) {
        await next();
    } else {
        ctx.response.status = 403;
    }
});

理解了middleware，我们就已经会用koa了！*/

/*
app.use(async (ctx, next) => {
    if (ctx.request.path === '/') {
        ctx.response.body = 'index page';
    } else {
        await next();
    }
});

app.use(async (ctx, next) => {
    if (ctx.request.path === '/test') {
        ctx.response.body = 'TEST page';
    } else {
        await next();
    }
});

app.use(async (ctx, next) => {
    if (ctx.request.path === '/error') {
        ctx.response.body = 'ERROR page';
    } else {
        await next();
    }
});

*/

// 在端口8014监听:
app.listen(8014);
console.log('app started at port 8014...');

// node --debug-brk=40645 --nolazy app.js -->> 执行 -->>x