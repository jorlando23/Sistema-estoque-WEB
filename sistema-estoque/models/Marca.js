const { Model, DataTypes } = require('sequelize')
const connection = require('../database/connection')
class Marca extends Model{}

Marca.init({
    nome: DataTypes.STRING
},{
    sequelize:connection
})
module.exports = Marca