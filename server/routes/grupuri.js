const Grup = require('../models/grup');
const { Op } = require("sequelize");
const router = require('express').Router();

router.route('/')
    .get(async (req, res) => {
        try {

            // const {cautareNumeUtilizator} = req.query;

            // //http://localhost:7000/api/utilizatori/?cautareNumeUtilizator=UPDATEIonica
            // const utilizatori = await Utilizator.findAll({
            // where: cautareNumeUtilizator ? {numeUtilizator:{[Op.like]: '%UPDATEIonica'}} : undefined
            // });

            const grupuri = await Grup.findAll();
            return res.status(200).json(grupuri);
        }
        catch (err) {
            return res.status(500).json(err);
        }
    })
    .post(async (req, res) => {
        try {
            const newGrup = await Grup.create(req.body);
            return res.status(200).json(newGrup);
        } catch (err) {
            return res.status(500).json(err);
        }
    })

router.route('/:id')
    .get(async (req, res) => {
        try {
            const grup = await Grup.findByPk(req.params.id);
            if (grup) {
                return res.status(200).json(grup);
            } else {
                return res.status(404).json({ error: `nu a fost gasit id = ${req.params.id}` });
            }

        }
        catch (err) {
            return res.status(500).json(err);
        }
    })
    .put(async (req, res) => {
        try {
            const grup = await Grup.findByPk(req.params.id);
            if (grup) {
                const updateGrup = await grup.update(req.body);
                return res.status(200).json(updateGrup);
            } else {
                return res.status(404).json({ error: `nu a fost gasit id = ${req.params.id}` });
            }

        }
        catch (err) {
            return res.status(500).json(err);
        }
    })

module.exports = router;