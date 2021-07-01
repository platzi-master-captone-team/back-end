const BookingService = module.exports;
const BookingRepository = require('../repositories/BookingRepository');

BookingService.getUpcomingBookingByUserId = async (userId) => {
  const upcomingBooking = await BookingRepository.getUpcomingBookingsByUserId(
    userId,
  );
  return upcomingBooking;
};

BookingService.getUpcomingBookingByConsultorId = async (consultorId) => {
  const upcomingBookings = await BookingRepository.getUpcomingBookingsByUserId(
    consultorId,
  );
  return upcomingBookings;
};

BookingService.getCompletedBookingByUserId = async (userId) => {
  const upcomingBooking = await BookingRepository.getCompletedBookingsByUserId(
    userId,
  );
  return upcomingBooking;
};

BookingService.getCompletedBookingByConsultorId = async (consultorId) => {
  const upcomingBookings =
    await BookingRepository.getCompletedBookingsByConsultorId(consultorId);
  return upcomingBookings;
};

BookingService.getBookingById = async (bookingId) => {
  const booking = await BookingRepository.getBookingById(bookingId);
  return booking;
};

BookingService.createNewBooking = async (data) => {
  const newBooking = await BookingRepository.insertNewBooking(data);
  return newBooking;
};

BookingService.getAvailability = async (consulterId) => {
  const availability = await BookingRepository.getAvailability(consulterId);
  return availability;
};
