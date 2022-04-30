const express = require('express')
const router = express.Router()
const usersRoutes = require('./../controllers/users-controller')

router.post('/returnToken', usersRoutes.usersReturnToken)

router.post('/returnArea', usersRoutes.usersReturnArea)

module.exports = router