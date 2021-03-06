// User related routes
const express = require('express');

const {
  CreateNewUserSchema,
  UpdateUserSchema,
  LoginSchema,
} = require('../validators/UserSchema');
const passport = require('../utils/passportStrategies');
const validate = require('../middleware/ValidationHandler');
const redirectToConsultify = require('../utils/redirectToConsultify');

const UserController = require('../controllers/UserController');

const router = express.Router();

router.get('/', UserController.getUsers);
router.get('/:userId', UserController.getUserById);
router.post('/', validate(CreateNewUserSchema), UserController.createNewUser);
router.put(
  '/:userId',
  validate(UpdateUserSchema),
  UserController.updateUserById,
);
router.post('/login', validate(LoginSchema), UserController.login);
router.get('/auth/linkedin', passport.authenticate('linkedin'));
router.get(
  '/auth/linkedin/callback',
  passport.authenticate('linkedin'),
  redirectToConsultify,
);
router.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  }),
);
router.get(
  '/auth/google/callback',
  passport.authenticate('google'),
  redirectToConsultify,
);

module.exports = router;
