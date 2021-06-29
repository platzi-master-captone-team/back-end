const BookingController = module.exports;
const boom = require('@hapi/boom');

const BookingService = require('../services/BookingService');

BookingController.getUpcomingUserBookings = async (_req, res) => {
  try {
    const data = await BookingService.getUpcomingBookingByUserId(_req.user.id);
    return res.send(data);
  } catch (error) {
    return boom.internal(error);
  }
};

BookingController.getUpcomingConsulterBookings = async (_req, res) => {
  try {
    const data = await BookingService.getUpcomingBookingByConsultorId(
      _req.user.id,
    );
    return res.send(data);
  } catch (error) {
    return boom.internal(error);
  }
};

BookingController.getCompletedUserBookings = async (_req, res) => {
  try {
    const data = await BookingService.getCompletedBookingByUserId(_req.user.id);
    return res.send(data);
  } catch (error) {
    return boom.internal(error);
  }
};

BookingController.getCompletedConsulterBookings = async (_req, res) => {
  try {
    const data = await BookingService.getCompletedBookingByConsultorId(
      _req.user.id,
    );
    return res.send(data);
  } catch (error) {
    return boom.internal(error);
  }
};

BookingController.getBookingById = async (req, res) => {
  const { bookingId } = req.params;
  try {
    const data = await BookingService.getBookingById(bookingId);
    if (!data) {
      return false;
    }
    return data;
  } catch (error) {
    return boom.internal(500);
  }
};

BookingController.createNewBooking = async (req, res) => {};
