const router = require('express').Router();

// const userRoutes = require('./user-routes');
const cpuRoutes = require('./cpu-routes');
// router.use('/users', userRoutes);
router.use('/cpu', cpuRoutes);

module.exports = router;
