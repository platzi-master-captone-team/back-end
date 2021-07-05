const express = require('express');

const UserRoutes = require('./routes/UserRoutes');
const ConsultantsRoutes = require('./routes/ConsultantsRoutes');
const metaData = require('./routes/metaData');
const EmailRoutes = require('./routes/EmailRoutes');
const BookingRoutes = require('./routes/BookingRoutes');
const CharacteristicsRoutes = require('./routes/CharacteristicsRoutes');

const router = express.Router();

router.use('/user', UserRoutes);
router.use('/consultants', ConsultantsRoutes);
router.use('/metadata', metaData);
router.use('/email', EmailRoutes);
router.use('/booking', BookingRoutes);
router.use('/characteristics', CharacteristicsRoutes);

module.exports = router;
