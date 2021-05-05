const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./api/home-routes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;
