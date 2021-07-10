// Booking related routes
const express = require('express');
const { CreateNewBookingSchema } = require('../validators/BookingSchema');
const validate = require('../middleware/ValidationHandler');
const verify = require('../utils/verifyToken');
const convertTZ = require('../utils/convertTZ');
const BookingController = require('../controllers/BookingController');

const router = express.Router();

router.get('/upcoming', verify, (req, _res) => {
  let type;
  if (req.params.user) {
    type = 'user';
  } else if (req.params.consultor) {
    type = 'consulter';
  }
  const action = {
    user: BookingController.getUpcomingUserBookings,
    consulter: BookingController.getUpcomingConsulterBookings,
  };
  return action[type];
});

router.get('/completed', verify, (req, _res) => {
  let type;
  if (req.params.user) type = 'user';
  else if (req.params.consultor) type = 'consulter';

  const action = {
    user: BookingController.getCompletedUserBookings,
    consulter: BookingController.getCompletedConsulterBookings,
  };

  return action[type];
});

router.post(
  '/',
  validate(CreateNewBookingSchema),
  BookingController.createNewBooking,
);

router.get('/availability/:consultor_id', BookingController.getAvailability);

router.get('/verify', verify, async (req, res) => {
  const booking = await BookingController.getBookingById;
  if (!booking) return res.status(404).send({ result: 'Booking Not Found' });

  const now = Date.now();
  const formattedNow = convertTZ(now, booking.timezone);
  const formattedBookingStartTime = convertTZ(
    booking.start_at,
    booking.timezone,
  );

  const formattedBookingEndTime = convertTZ(booking.start_at, booking.timezone);
  if (req.user.id === booking.user_id || req.user.id === booking.consultor_id) {
    const diffeenceBetweenStartDates = formattedBookingStartTime - formattedNow;
    const differenceInMinutesBetweenStartDates = Math.floor(
      diffeenceBetweenStartDates / 1000 / 60,
    );
    const diffeenceBetweenEndDates = formattedBookingEndTime - formattedNow;
    const differenceInMinutesBetweenEndDates = Math.floor(
      diffeenceBetweenEndDates / 1000 / 60,
    );
    if (
      differenceInMinutesBetweenStartDates <= 10
      && differenceInMinutesBetweenEndDates >= 10
    ) {
      res.status(200).send({ result: true });
    } else {
      res.status(400).send({ result: false });
    }
  }
});

module.exports = router;
