const express = require('express')
const router = express.Router()
const usersRoutes = require('./../controllers/users-controller')

router.post('/returnToken', usersRoutes.usersReturnToken)

module.exports = router