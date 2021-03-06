const UserService = module.exports;
const UserRepository = require('../repositories/UserRepositories');
const { hashPassword } = require('../utils/bcrypt');

UserService.getUsers = async () => {
  const usersInfo = await UserRepository.getUsers();

  return usersInfo;
};

UserService.getUserById = async (userId) => {
  const userInfo = await UserRepository.getUserById(userId);

  return userInfo;
};

UserService.getUserByEmail = async (userEmail) => {
  const userInfo = await UserRepository.getUserByEmail(userEmail);
  return userInfo;
};

UserService.createNewUser = async (data) => {
  let password;
  if (data.password) {
    password = await hashPassword(data.password);
  }

  const newUser = await UserRepository.insertNewUser({ ...data, password });
  return newUser;
};

UserService.updateUserById = async (userId, data) => {
  const updatedUser = await UserRepository.updateUserById(userId, data);

  const { password: userPassword, ...updatedData } = updatedUser;

  return updatedData;
};
