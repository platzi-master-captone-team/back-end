const BookingRepository = module.exports;

const { db } = require('../utils/Database');

BookingRepository.insertNewBooking = async (data) => {
  const result = await db('bookings').insert(data, '*');
  return result[0];
};

BookingRepository.getBookingById = async (bookingId) => {
  const data = await db('bookings').where({ id: bookingId }).first();
  return data;
};

BookingRepository.getUpcomingBookingsByUserId = async (userId) => {
  const data = await db('bookings').where({ user_id: userId, status_id: 1 });
  return data;
};

BookingRepository.getUpcomingBookingsByConsultorId = async (userId) => {
  const data = await db('bookings').where({
    consultor_id: userId,
    status_id: 1,
  });
  return data;
};

BookingRepository.getCompletedBookingsByUserId = async (userId) => {
  const data = await db('bookings').where({ user_id: userId, status_id: 2 });
  return data;
};

BookingRepository.getCompletedBookingsByConsultorId = async (userId) => {
  const data = await db('bookings').where({
    consultor_id: userId,
    status_id: 2,
  });
  return data;
};

BookingRepository.getAvailability = async (userId) => {
  const data = await db('slots')
    .select(
      'slots.date',
      db.raw("STRING_AGG(slot_details.hour::character varying, ',') slots"),
    )
    .innerJoin('slot_details', 'slots.id', 'slot_details.slots_id')
    .where('slots.user_id', userId)
    .groupBy('slots.date');
  const result = data.map((slot) => ({
    date: slot.date,
    slots: slot.slots.split(','),
  }));
  return result;
};

BookingRepository.addAvailability = async (userId, data) => {
  let result;
  // eslint-disable-next-line no-restricted-syntax
  for (const row of data) {
    const insertData = {
      user_id: userId,
      date: row.date,
    };
    const id = await db('slots').insert(insertData, 'id');
    const insertSlots = row.hours.map((hour) => ({
      slots_id: id[0],
      hour,
      reserved: 0,
    }));
    const insertedSlots = await db('slot_details').insert(insertSlots, '*');
    result = !!insertedSlots;
  }
  return result;
};
