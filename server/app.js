'use strict'

const express = require('express');
const sequelize = require("./sequelize")

const routerAliment = require('./routes/alimente');
const routerUtilizator = require('./routes/utilizatori');
const routerGrup = require('./routes/grupuri');

const Aliment = require("./models/aliment");
const Utilizator = require("./models/utilizator");
const Grup = require("./models/grup");

const app = express();

app.use(express.urlencoded({
    exteneded: true,
}));
app.use(express.json());


app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`)
    next()
})
app.use((err, req, res, next) => {
    console.error(`[ERROR]: ${err.stack}`)
    res.status(500).json(err)
})
// //definire relatii eititati
Utilizator.hasMany(Aliment);

//un utilizator sa poata aduga mai multe alimente
app.post('/utilizatori/:idUtilizator/alimente', async (req, res, next) => {
    try {
        const utilizator = await Utilizator.findByPk(req.params.idUtilizator);
        if (utilizator) {
            const aliment = new Aliment(req.body);
            aliment.utilizatorIdUtilizator = utilizator.idUtilizator;
            console.log(req.params.idUtilizator);
            await aliment.save();
            res.status(201).json({ message: 'Aliment creat!' });
        }
        else {
            res.status(404).json({ message: 'Utilizator nu a fost gasit!' });
        }
    } catch (err) {
        next(err);
    }
})

app.get("/create", async (req, res, next) => {
    try {
        await sequelize.sync({ force: true });
        res.status(201).json({ message: "baza de date creata!" });
    }
    catch (err) {
        next(err);
    }
});

app.set("port", process.env.PORT || 7000);
app.use('/utilizatori', routerUtilizator);
app.use('/alimente', routerAliment);
app.use('/grupuri', routerGrup);

app.listen(7000, async () => {
    console.log("serverr...");
    try {
        await sequelize.authenticate();
        console.log("Connection done")
    } catch {
        console.error("error", error);

    }
});