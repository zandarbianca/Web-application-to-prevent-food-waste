const sequelize = require('../sequelize')
const { DataTypes } = require('sequelize')

const Grup = sequelize.define('grup', {
    idGrup: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    numeGrup: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [2, 30]
        }
    }
},
    {
        tableName: 'Grupuri'
    }

)
module.exports = Grup