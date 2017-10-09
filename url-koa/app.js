// koa-router
// 为了处理URL，我们需要引入koa-router这个middleware，让它负责处理URL映射

const Koa = require('koa');

// 注意require('koa-router')返回的是函数:
const router = require('koa-router')();
// 引入koa-bodyparser
const bodyParser = require('koa-bodyparser');

const app = new Koa();

// log request URL:
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});

// add url-route:
router.get('/hello/:name', async (ctx, next) => {
    var name = ctx.params.name;
    ctx.response.body = `<h1>Hello, ${name}!</h1>`;
});

router.get('/', async (ctx, next) => {
    ctx.response.body = `<h1>Index</h1>
    <form action="/signin" method="post">
    <p>Name: <input name="name" value="koa"></p>
    <p>Password: <input name="password" type="password"></p>
    <p><input type="submit" value="Submit"></p>
    </form>`;
});

router.post('/signin', async (ctx, next) => {
    var
        name = ctx.request.body.name || '',
        password = ctx.request.body.password || '';
    console.log(`signin with name: ${name}, password: ${password}`);
    if (name === 'koa' && password === '12345') {
        ctx.response.body = `<h1>Welcome, ${name}!</h1>`;
    } else {
        ctx.response.body = `<h1>Login failed!</h1>
        <p><a href="/">Try again</a></p>`;
    }
});

// add bodyParser middleware:
app.use(bodyParser());
// add router middleware:
app.use(router.routes());

// 在端口8014监听:
app.listen(8014);
console.log('app started at port 8014...');

// node --debug-brk=40645 --nolazy app.js -->> 执行 -->>x