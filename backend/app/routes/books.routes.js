const router = require('express').Router()
const auth = require('../middleware/auth')

const { getDataUsers } = require('../controller/book.controller')
const { signUp, signIn } = require('../controller/auth.controller')


router.get('/getDataUsers', auth, getDataUsers)
router.post('/signUp', signUp)
router.post('/signIn', signIn)

module.exports = router