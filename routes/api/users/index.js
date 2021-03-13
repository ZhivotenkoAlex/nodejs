const express = require('express')
const router = express.Router()
const usersController = require('../../../controllers/usersControllers')
const guard = require('../../../helpers/guard');

router.post('/register',usersController.reg)
router.post('/login',usersController.login)
router.post('/logout', guard, usersController.logout)
router.post('/current',guard,usersController.current)

module.exports = router