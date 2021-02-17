const Sequelize = require('sequelize');

const connection = new Sequelize('wine_challenge', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    timezone: "-03:00",

    define: {
        timestamps: false
    }
});

module.exports = connection;