require('dotenv').config(); // import the dotenv package

const Sequelize = require('sequelize'); // import the sequelize package

const sequelize = process.env.JAWSDB_URL // use the JAWSDB_URL if it exists
  ? new Sequelize(process.env.JAWSDB_URL) // use the JAWSDB_URL
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      // use the DB_NAME, DB_USER, and DB_PW
      host: 'localhost', // use localhost
      dialect: 'mysql', // use mysql
      dialectOptions: {
        // use the following options
        decimalNumbers: true, // use decimal numbers
      },
    });

module.exports = sequelize;
