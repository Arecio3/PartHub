const {User} = require('../models');

const userData = [
    {
        
            username: 'test',
            email: 'test@gmail.com',
            password: '123456'
        
        
    }
]
const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;