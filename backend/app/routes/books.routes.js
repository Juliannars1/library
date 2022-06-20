const router = require('express').Router()


const { getDataUsers } = require('../controller/book.controller')
const { signUp, signIn } = require('../controller/auth.controller')


router.get('/getDataUsers', getDataUsers)
router.post('/signUp', signUp)
router.post('/signIn', signIn)

module.exports = router