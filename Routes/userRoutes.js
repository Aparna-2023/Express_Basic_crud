const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/', userController.CreateUser)
router.get('/', userController.getAllUsers)
router.get('/:id', userController.getUserById)
router.put('/:id', userController.userUpdateById)
router.delete('/:id', userController.deleteuserById)






module.exports = router;