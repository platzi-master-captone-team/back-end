const UserRepository = module.exports;

const { db } = require('../utils/Database');

UserRepository.insertNewUser = async (data) => {
  try {
    const result = await db('users').insert(data, '*');
    return result[0];
  } catch (error) {
    console.log(error);
  }
};

UserRepository.getUserById = async (userId) => {
  const data = await db('users').where({ id: userId }).first();
  return data;
};

UserRepository.getUserByEmail = async (userEmail) => {
  const data = await db('users').where({ email: userEmail }).first();
  return data;
};

UserRepository.getUsers = async () => {
  const users = await db('users').select();
  return users;
};

UserRepository.updateUserById = async (userId, data) => {
  const updated = await db('users')
    .where({ id: userId })
    .update(data)
    .returning('*');
  return updated;
};
