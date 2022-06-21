const jwt = require('jsonwebtoken')
//const User = require('../models/User')

const auth = async (req, res, next) => {

    const token = req.headers["x-access-token"];
    console.log("token-middlerware " + token)
    if (!token) return res.status(403).json({ message: "No token provided" })
    const data = jwt.verify(token, process.env.TOKEN_SECRET)
    console.log(data)

    next()
    // const data = jwt.verify(token, process.env.TOKEN_SECRET)
    // try {
    //     const user = await User.findOne({ _id: data._id, 'tokens.token': token })
    //     if (!user) {
    //         throw new Error()
    //     }
    //     req.user = user
    //     req.token = token
    //     next()
    // } catch (error) {
    //     res.status(401).send({ error: 'Not authorized to access this resource' })
    // }

}
module.exports = auth