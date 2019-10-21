import Router from 'koa-router';

const router = new Router(); 

router.post('/bookmarks', async ctx => {
    ctx.body = 'hello world';
});

router.get('/bookmarks', async ctx => {
    ctx.body = ['bookmark 1', 'bookmark 2', 'bookmark 3']; 
}); 