const express = require('express');

const UserRoutes = require('./routes/UserRoutes');
const metaData = require('./routes/metaData');

const router = express.Router();

router.use('/user', UserRoutes);
router.use('/metadata', metaData);

module.exports = router;
