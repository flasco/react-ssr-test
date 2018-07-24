const Router = require('koa-router');
const home = require('../controllers/index');
const router = Router();

router.use('/test', home.routes(), home.allowedMethods());

router.get('*', async (ctx, next) => {
  ctx.body = 'Request Error';
});

module.exports = router;