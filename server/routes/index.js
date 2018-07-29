const Router = require('koa-router');
const home = require('../controllers/index');
const router = Router();

router.use('*', home.routes(), home.allowedMethods());

module.exports = router;