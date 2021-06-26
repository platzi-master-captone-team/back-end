/* eslint-disable camelcase */
const UserController = module.exports;
const boom = require('@hapi/boom');

const UserService = require('../services/UserService');
const bcrypt = require('../utils/bcrypt');
const jwt = require('../utils/jwt');

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
UserController.getUsers = async (_req, res) => {
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
    const user = await UserService.getUserByEmail(req.body.email);
    if (user) {
      return res.status(400).send({ error: 'User already exists' });
    }

    const userData = req.body;
    // eslint-disable-next-line prefer-const
    let { phone_number, ...restUserData } = userData;
    phone_number = parseInt(phone_number, 10);
    restUserData.phone_number = phone_number;
    const data = await UserService.createNewUser(restUserData);
    const dataForToken = {
      user: {
        id: data.id,
        name: data.name,
        role_id: data.role_id,
        email: data.email,
      },
    };
    const token = jwt(dataForToken);
    return res.status(201).send({ token });
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

UserController.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserService.getUserByEmail(email);
    if (!user) {
      return boom.badData('Invalid Username or password');
    }
    const areEqual = await bcrypt.validatePass(password, user.password);
    if (areEqual) {
      const {
        id,
        role_id, // eslint-disable-line
        name,
        email: userEmail,
      } = user;
      const dataForToken = {
        user: {
          id,
          name,
          role_id,
          userEmail,
        },
      };
      const token = jwt(dataForToken);
      return res.status(200).send({
        token,
      });
    }
    return res.status(403).send({ error: 'Invalid email or password' });
  } catch (error) {
    return boom.internal(error.message);
  }
};
