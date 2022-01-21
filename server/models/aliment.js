const sequelize = require('../sequelize')
const { DataTypes } = require('sequelize')

const Aliment = sequelize.define('aliment', {
    idAliment: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    numeAliment: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [2, 30]
        }
    },
    dataExpirareAliment: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    categorieAliment: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isIn: [['patiserie', 'legume', 'fructe', 'dulciuri']]

        }
    },
    disponibilitateAliment: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    }
},
    {
        tableName: 'Aliment'
    }
)
module.exports = Aliment