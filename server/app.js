"use strict";
const express = require("express");
const sequelize = require("./sequelize")
// require("./models/utilizator")
require("./models/aliment")

const app = express();
app.use(express.urlencoded({
    exteneded:true, 
}));
app.use(express.json());

app.set("port", process.env.PORT || 7000);
// app.use("/api",require("./routes/utilizatori"));
app.use("/api",require("./routes/alimente"));

app.listen(7000, async() =>{
    console.log("serverr...");
    try{
        await sequelize.authenticate();
        console.log("Connection done")
    }catch{
        console.error("error",error); 
    
    }
});