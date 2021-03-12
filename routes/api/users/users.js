const express = require('express')
const router = express.Router()
const usersController=require('../../../controllers/usersControllers')

router.post('/register',usersController.reg)
router.post('/login',usersController.login)
router.post('/logout',usersController.logout)
router.post('/current',usersController.current)

module.exports = router