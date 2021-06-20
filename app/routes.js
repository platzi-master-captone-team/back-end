const express = require('express');

const UserRoutes = require('./routes/UserRoutes');

const router = express.Router();

router.use('/user', UserRoutes);

module.exports = router;
