const Aliment = require('../models/aliment');
const {Op} = require("sequelize");
const router = require('express').Router();

router.route('/')
.get(async(req,res) =>{
    try{

        // const {cautareNumeUtilizator} = req.query;

        // //http://localhost:7000/api/utilizatori/?cautareNumeUtilizator=UPDATEIonica
        // const utilizatori = await Utilizator.findAll({
        // where: cautareNumeUtilizator ? {numeUtilizator:{[Op.like]: '%UPDATEIonica'}} : undefined
        // });

        // http://localhost:7000/api/alimente
        //const alimente = await Aliment.findAll();
        return res.status(200).json(alimente);
    }
    catch(err){
        return res.status(500).json(err);
    }
})
.post(async(req,res) =>{
    // http://localhost:7000/api/alimente
    try{
        const newAliment = await Aliment.create(req.body);
        return  res.status(200).json(newAliment);
    }catch(err){
        return res.status(500).json(err);
    }
})

router.route('/:id')
.get(async(req,res) =>{
    // http://localhost:7000/api/alimente/2
    try{
        const aliment = await Aliment.findByPk(req.params.id);
      if(aliment){
          return res.status(200).json(aliment);
      }else{
          return res.status(404).json({error:`nu a fost gasit id = ${req.params.id}`});
      }
        
    }
    catch(err){
        return res.status(500).json(err);
    }
})
.put(async(req,res) =>{
    // http://localhost:7000/api/alimente/2
    try{
        const aliment = await Aliment.findByPk(req.params.id);
      if(aliment){
          const updateAliment = await aliment.update(req.body);
          return res.status(200).json(updateAliment);
      }else{
          return res.status(404).json({error:`nu a fost gasit id = ${req.params.id}`});
      }
        
    }
    catch(err){
        return res.status(500).json(err);
    }
})

module.exports = router;