const express = require('express');

const UserRoutes = require('./routes/UserRoutes');
const metaData = require('./routes/metaData');
const EmailRoutes = require('./routes/EmailRoutes');

const router = express.Router();

router.use('/user', UserRoutes);
router.use('/metadata', metaData);
router.use('/email', EmailRoutes);

module.exports = router;
