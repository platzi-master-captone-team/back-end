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

UserController.getUserDetailById = async (req, res) => {
  const { params: { userId } } = req;

  /*
  try {
    const data = await UserService.getUserDetailById(userId);
    if (!data) {
      return res.status(404).send('User not found');
    }
  } catch (error) {
    return boom.internal(500);
  }*/

  const data = {
    id: userId,
    name: 'Paxon Treverton',
    profession: 'Analyst Programmer',
    mastery: 'frontend',
    email: 'ptreverton0@blogtalkradio.com',
    linkedin: 'http://xrea.com/ante/vestibulum/ante/ipsum/primis.json',
    github: 'http://tumblr.com/purus/eu/magna/vulputate/luctus/cum/sociis.html',
    resume: 'https://dedecms.com/rhoncus/dui.jsp',
    technologies: 'Business-focused',
    description: 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    experience: 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    education: 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.',
    fee: 57,
    avatar: 'https://robohash.org/sequiconsequatursint.jpg?size=100x100&set=set1',
  };

  return res.send(data);
};
