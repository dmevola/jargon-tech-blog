const { User } = require('../models');

const userData = [
    {
        username: "stevejones",
        email: "steve@gmail.com",
        password: "pass123!"
    },
    {
        username: "marksmith",
        email: "mark@gmail.com",
        password: "pass1234!"
    },
    {
        username: "jilllopez",
        email: "jill@gmail.com",
        password: "pass12345!"
    },
    {
        username: "conradoxford",
        email: "conrad@gmail.com",
        password: "pass123456!"
    },
    {
        username: "sandeepreddy",
        email: "sandeep@gmail.com",
        password: "pass1234567!"
    },
    {
        username: "ingridstein",
        email: "ingrid@gmail.com",
        password: "pass12345678!"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;