// User related routes
const express = require('express');
const {
  CreateNewUserSchema,
  UpdateUserSchema,
} = require('../validators/UserSchema');
const validate = require('../middleware/ValidationHandler');

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

module.exports = router;
