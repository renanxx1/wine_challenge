const Sequelize = require("sequelize");
const connection = require("../database/db");

const Cep = connection.define("cep",  {

    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
    },

    store_code: {
        type: Sequelize.STRING,
        allowNull: false
    },

    cep_start: {
        allowNull: false,
        type: Sequelize.INTEGER,
    },

    cep_end: {
        allowNull: false,
        type: Sequelize.INTEGER,
    }

});


Cep.sync({
    force: false
});
module.exports = Cep;
