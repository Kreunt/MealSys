const express = require('express')
const router = express.Router()
const usersRoutes = require('./../controllers/users-controller')

router.get('/all', usersRoutes.usersAll)

router.get('/find', usersRoutes.usersFind)

module.exports = router