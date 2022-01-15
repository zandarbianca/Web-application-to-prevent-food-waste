const Utilizator = require("../models/utilizator");
const {Op} = require("sequelize");
const router = require("express").Router();

router.route("/utilizatori")
.get(async(req,res) =>{
    try{

        const {cautareNumeUtilizator} = req.query;

        //http://localhost:7000/api/utilizatori/?cautareNumeUtilizator=UPDATEIonica
        const utilizatori = await Utilizator.findAll({
        where: cautareNumeUtilizator ? {numeUtilizator:{[Op.like]: '%UPDATEIonica'}} : undefined
        });

        //const utilizatori = await Utilizator.findAll();
        return res.status(200).json(utilizatori);
    }
    catch(err){
        return res.status(500).json(err);
    }
})
.post(async(req,res) =>{
    try{
        const newUtilizator = await Utilizator.create(req.body);
        return  res.status(200).json(newUtilizator);
    }catch(err){
        return res.status(500).json(err);
    }
})

router.route("/utilizatori/:id")
.get(async(req,res) =>{
    try{
        const utilizator = await Utilizator.findByPk(req.params.id);
      if(utilizator){
          return res.status(200).json(utilizator);
      }else{
          return res.status(404).json({error:`nu a fost gasit id = ${req.params.id}`});
      }
        
    }
    catch(err){
        return res.status(500).json(err);
    }
})
.put(async(req,res) =>{
    try{
        const utilizator = await Utilizator.findByPk(req.params.id);
      if(utilizator){
          const updateUtilizator = await utilizator.update(req.body);
          return res.status(200).json(updateUtilizator);
      }else{
          return res.status(404).json({error:`nu a fost gasit id = ${req.params.id}`});
      }
        
    }
    catch(err){
        return res.status(500).json(err);
    }
})

module.exports = router;