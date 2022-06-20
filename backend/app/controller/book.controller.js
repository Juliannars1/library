const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const getDataUsers = async (req, res) => {
    const users = await prisma.User.findMany()
    res.json(users)
}

module.exports = {
    getDataUsers
}