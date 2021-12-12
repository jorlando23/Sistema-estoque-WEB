'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.createTable('marcas', { 
        id:{
          type:Sequelize.INTEGER,
          primaryKey:true,
          autoIncrement:true
        },
        nome:{
          type:Sequelize.STRING,
          allowNull:false
        } 
      });
     
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
