/*
	路由
*/

const router = require('koa-router')();

const home = require('./home');
const proxy = require('./proxy');

router.use('/', home.routes(), home.allowedMethods());
router.use('/api', proxy.routes(), proxy.allowedMethods());

module.exports = router;