const sequelize = require('../sequelize')
const { DataTypes } = require('sequelize')

const Utilizator = sequelize.define('utilizator', {
    idUtilizator: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    numeUtilizator: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [2, 30]
        }
    },
    emailUtilizator: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    parolaUtilizator: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [6, 30]
        }
    }
},
    {
        tableName: 'Utilizatori'
    }

)
module.exports = Utilizator