const { Sequelize } = require('sequelize')
const databaseConfig = require('../config/database')

const sequelize = new Sequelize(databaseConfig)

  async function test(){
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
//test()
module.exports = sequelize 