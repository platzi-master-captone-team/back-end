const UserService = module.exports;
const { hashPassword } = require('../utils/bcrypt');
const UserRepository = require('../repositories/UserRepositories');

UserService.getUsers = async () => {
  const usersInfo = await UserRepository.getUsers();

  return usersInfo;
};

UserService.getUserById = async (userId) => {
  const userInfo = await UserRepository.getUserById(userId);

  return userInfo;
};

UserService.createNewUser = async (data) => {
  const password = await hashPassword(data.password);

  const [newUser] = await UserRepository.insertNewUser({ ...data, password });
  return { id: newUser };
};

UserService.updateUserById = async (userId, data) => {
  const updatedUser = await UserRepository.updateUserById(userId, data);

  const { password: userPassword, ...updatedData } = updatedUser;

  return updatedData;
};
