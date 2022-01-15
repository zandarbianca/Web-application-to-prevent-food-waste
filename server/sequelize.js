const {Sequelize} = require('sequelize')

const sequelize = new Sequelize({
    dialect:'sqlite',
    storage:"./sqlite/test.db"
})

sequelize.sync({alter:true}).then(() =>{
    console.log("modele sincronizate");
});

module.exports = sequelize;