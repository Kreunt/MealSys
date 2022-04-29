const express = require('express')
const router = express.Router()
const usersRoutes = require('./../controllers/users-controller')

router.get('/returnToken', usersRoutes.usersReturnToken)

module.exports = router