import Router from 'koa-router';

const router = new Router({
    prefix: '/auth'
});

router.post('/users', async ctx => {
    ctx.body = 'hello world';
});