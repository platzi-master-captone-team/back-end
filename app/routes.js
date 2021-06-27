const express = require('express');

const UserRoutes = require('./routes/UserRoutes');
const metaData = require('./routes/metaData');
const EmailRoutes = require('./routes/EmailRoutes');
const BookingRoutes = require('./routes/BookingRoutes');

const router = express.Router();

router.use('/user', UserRoutes);
router.use('/metadata', metaData);
router.use('/email', EmailRoutes);
router.use('/booking', BookingRoutes);

module.exports = router;
