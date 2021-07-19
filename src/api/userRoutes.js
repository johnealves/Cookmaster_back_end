const express = require('express');
const router = express.Router();
const controllers = require('../controllers/index');

router.post('/', controllers.createUser);
router.get('/', controllers.getAllUsers);
router.get('/:userId', controllers.getUserById);
router.put('/:userId', controllers.attUserById);

module.exports = router;