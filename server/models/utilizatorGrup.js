const sequelize = require('../sequelize')
const { DataTypes } = require('sequelize')

const UtilizatorGrup = sequelize.define('utilizatorGrup', {
    idUtilizatorGrup: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
},
    {
        tableName: 'UtilizatorGrupuri'
    }

)
module.exports = UtilizatorGrup