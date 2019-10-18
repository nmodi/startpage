import Koa from 'koa';

import koaRespond from 'koa-respond';
import logger from 'koa-logger';
import bodyParser from 'koa-bodyparser';
import cors from '@koa/cors';

const app = new Koa();
app.use(logger());
app.use(cors());
app.use(bodyParser());
app.use(koaRespond());

import Router from 'koa-router';

const router = new Router();
router.get('/hello', async ctx => {
    ctx.body = 'hello world';
});

app.use(router.routes()).use(router.allowedMethods);

export default app;
