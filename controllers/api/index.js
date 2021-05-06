const router = require('express').Router();
// Users
const userRoutes = require('./user-routes');
router.use('/users', userRoutes);
// CPU
const cpuRoutes = require('./cpu-routes');
router.use('/cpu', cpuRoutes);
// GPU
const gpuRoutes = require('./gpu-routes');
router.use('/gpu', gpuRoutes);
// RAM
const ramRoutes = require('./ram-routes');
router.use('/ram', ramRoutes);
// SSD
const ssdRoutes = require('./ssd-routes');
router.use('/ssd', ssdRoutes);
// HDD
const hddRoutes = require('./hdd-routes');
router.use('/hdd', hddRoutes);


module.exports = router;
