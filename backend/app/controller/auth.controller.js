const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const signUp = async (req, res) => {
    console.log(req.body)
    const { email, name, cardId, phoneNumber, roles, password } = req.body
    const salt = bcrypt.genSaltSync(10);
    try{
        const createUser = await prisma.user.create({
            data: {
                email:email,
                name:name,
                id_card:parseInt(cardId),
                phone_number:parseInt(phoneNumber),
                role:roles,
                password: bcrypt.hashSync(password, salt)
            }
        })
        const accessToken = jwt.sign({ id: createUser.id_card }, process.env.TOKEN_SECRET, {
            expiresIn: 86400
        })
        res.json({ accessToken })
    }catch(err){
    console.log(err.message)
    }
    
}

const signIn = async (req, res) => {
    const { email, passwordForm } = req.body
    const msj = "Usuario Logiado"
    try {
        const usersFound = await prisma.User.findMany({
            where: {
                email: email,
            }
        })
        const { password, id_card } = usersFound[0]
        const match = await bcrypt.compareSync(passwordForm, password, (err, res) => {
            if (err) {
                console.log('comparacion error', err)
            }
        })
        const accessToken = jwt.sign({ id_card }, process.env.TOKEN_SECRET)
        if (match) {
            res.json({ email: email, accessToken: accessToken });
        } else {
            res.json({ message: "Invalid Credentials" });
        }
    } catch (e) {
        console.log(e)
    }


}
module.exports = {
    signUp, signIn
}