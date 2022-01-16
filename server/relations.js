const Utilizator = require('./models/utilizator')
const Aliment = require('./models/aliment')

Utilizator.hasMany(Aliment, {
    foreignKey: 'idUtilizator'
})

module.exports = { Utilizator, Aliment }