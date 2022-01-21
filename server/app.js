'use strict'

const express = require('express');
const sequelize = require("./sequelize");
const cors = require('cors')


const routerAliment = require('./routes/alimente');
const routerUtilizator = require('./routes/utilizatori');
const routerGrup = require('./routes/grupuri');
const routerUtilizatorGrup = require('./routes/utilizatorGrupuri');

const Aliment = require("./models/aliment");
const Utilizator = require("./models/utilizator");
const Grup = require("./models/grup");
const UtilizatorGrup = require("./models/utilizatorGrup");

const app = express();

app.use(express.urlencoded({
    exteneded: true,
}));
app.use(cors())

app.use(express.json());


app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`)
    next()
})
app.use((err, req, res, next) => {
    console.error(`[ERROR]: ${err.stack}`)
    res.status(500).json(err)
})
//definire relatii eititati
Utilizator.hasMany(Aliment);
Grup.hasMany(UtilizatorGrup);
Utilizator.hasMany(UtilizatorGrup);

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

//un utilizatorGrup sa poata aduga mai multe grupuri
app.post('/utilizatori/:idUtilizator/grupuri', async (req, res, next) => {
    try {
        const utilizator = await Utilizator.findByPk(req.params.idUtilizator);
        if (utilizator) {
            const grup = new Grup(req.body);
            await grup.save();
            res.status(201).json({ message: 'Grup creat!' });
        }
        else {
            res.status(404).json({ message: 'UtilizatorGrup nu a fost gasit!' });
        }
    } catch (err) {
        next(err);
    }
})

//un utilizatorGrup sa poata aduga mai multe grupuri
app.post('/utilizatori/:idUtilizator/:idGrup/utilizatorGrupuri', async (req, res, next) => {
    try {
        const utilizator = await Utilizator.findByPk(req.params.idUtilizator);
        const grup = await Grup.findByPk(req.params.idGrup);
        //  console.log("Merge!!!");
        if (utilizator && grup) {
            console.log("Merge!!!");
            const utilizatorGrup = new UtilizatorGrup(req.body);

            utilizatorGrup.utilizatorIdUtilizator = utilizator.idUtilizator;
            utilizatorGrup.grupIdGrup = grup.idGrup;

            await utilizatorGrup.save();
            res.status(201).json({ message: 'Utilizator grup creat!' });
        }
        else {
            res.status(404).json({ message: 'UtilizatorGrup nu a fost gasit!' });
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
app.use('/utilizatorGrupuri', routerUtilizatorGrup);
app.listen(7000, async () => {
    console.log("serverr...");
    try {
        await sequelize.authenticate();
        console.log("Connection done")
    } catch {
        console.error("error", error);
    }
});