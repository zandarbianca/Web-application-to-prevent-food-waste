'use strict'

const express = require('express');


const sequelize = require("./sequelize")
// const routerUtilizator = require("./models/utilizator")
// const routerAliment = require("./models/aliment")

const routerAliment = require('./routes/alimente');
const routerUtilizator = require('./routes/utilizatori');

const Aliment = require("./models/aliment");
const Utilizator = require("./models/utilizator");

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

app.get("/create",async(req,res,next) =>{
    try{
    await sequelize.sync({force:true});
    res.status(201).json({message: "baza de date creata!" });}
    catch(err){
        next(err);
    }
});

app.set("port", process.env.PORT || 7000);
app.use('/utilizatori',routerUtilizator );
app.use('/alimente',routerAliment );

app.listen(7000, async () => {
    console.log("serverr...");
    try {
        await sequelize.authenticate();
        console.log("Connection done")
    } catch {
        console.error("error", error);

    }
});