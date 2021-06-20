const UserController = module.exports;
const boom = require('@hapi/boom');

const UserService = require('../services/UserService');

/**
 * @api {get} /api/user/ Get the information of all users
 * @apiName GetUsers
 * @apiDescription Get the information of all users.
 *
 * @apiSuccessExample Success Response
 * HTTP/1.1 200
 *
 * @apiError (500) {Object} System error.
 */
// eslint-disable-next-line consistent-return
UserController.getUsers = async (req, res) => {
  try {
    const data = await UserService.getUsers();
    return res.send(data);
  } catch (error) {
    boom.internal(error);
  }
};

/**
 * @api {get} /api/user/:userId Get the information of a user
 * @apiName GetUser
 * @apiDescription Get the information of a user.
 *
 * @apiSuccessExample Success Response
 * HTTP/1.1 200
 *
 * @apiError (404) {Object} User not found.
 * @apiError (500) {Object} System error.
 */
UserController.getUserById = async (req, res) => {
  const { userId } = req.params;
  try {
    const data = await UserService.getUserById(userId);
    if (!data) {
      return res.status(404).send('User not found');
    }
    return res.send(data);
  } catch (error) {
    return boom.internal(500);
  }
};

/**
 * @api {post} /api/user/ Create a new user
 * @apiName PostNewUser
 * @apiDescription Create a new user
 *
 * @apiParam (body) {string} name: user's name
 * @apiParam (body) {number} phone_number: user's phone number
 * @apiParam (body) {number} country_id: country where the user lives
 * @apiParam (body) {string} payment_method_id: user's payment method
 * @apiParam (body) {string} password: user's password
 * @apiParam (body) {string} role_id: user's role id
 * @apiParam (body) {string} email: user's email
 *
 * @apiSuccessExample Success Response
 * HTTP/1.1 200
 *
 * @apiError (500) {Object} System error.
 */
UserController.createNewUser = async (req, res) => {
  try {
    const data = await UserService.createNewUser(req.body);
    return res.status(201).send(data);
  } catch (error) {
    return boom.internal(error);
  }
};

/**
 * @api {put} /api/user/ Create a new user
 * @apiName UpdateUser
 * @apiDescription Update a new user
 *
 * @apiParam (body) {string} name: user's name
 * @apiParam (body) {number} phone_number: user's phone number
 * @apiParam (body) {number} country_id: country where the user lives
 * @apiParam (body) {string} payment_method_id: user's payment method
 * @apiParam (body) {string} password: user's password
 * @apiParam (body) {string} role_id: user's role id
 * @apiParam (body) {string} email: user's email
 *
 * @apiSuccessExample Success Response
 * HTTP/1.1 200
 *
 * @apiError (500) {Object} System error.
 */
UserController.updateUserById = async (req, res) => {
  const { userId } = req.params;
  try {
    const data = await UserService.updateUserById(userId, req.body);
    return res.send(data);
  } catch (error) {
    return boom.internal(error);
  }
};
