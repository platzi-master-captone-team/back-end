const UserRepository = module.exports;

const { db } = require('../utils/Database');

UserRepository.insertNewUser = async (data) => {
  const result = await db('users').insert(data, 'id');
  return result;
};

UserRepository.getUserById = async (userId) => {
  const data = await db('users').where({ id: userId }).first();
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
