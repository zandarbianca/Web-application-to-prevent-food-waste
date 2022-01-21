const UtilizatorGrup = require('../models/utilizatorGrup');
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

            const utilizatorGrupuri = await UtilizatorGrup.findAll();
            return res.status(200).json(utilizatorGrupuri);
        }
        catch (err) {
            return res.status(500).json(err);
        }
    })
    .post(async (req, res) => {
        try {
            const newUtilizatorGrup = await UtilizatorGrup.create(req.body);
            return res.status(200).json(newUtilizatorGrup);
        } catch (err) {
            return res.status(500).json(err);
        }
    })

router.route('/:id')
    .get(async (req, res) => {
        try {
            const utilizatorGrup = await UtilizatorGrup.findByPk(req.params.id);
            if (utilizatorGrup) {
                return res.status(200).json(utilizatorGrup);
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
            const utilizatorGrup = await UtilizatorGrup.findByPk(req.params.id);
            if (utilizatorGrup) {
                const updateUtilizatorGrup = await utilizatorGrup.update(req.body);
                return res.status(200).json(updateUtilizatorGrup);
            } else {
                return res.status(404).json({ error: `nu a fost gasit id = ${req.params.id}` });
            }

        }
        catch (err) {
            return res.status(500).json(err);
        }
    })

module.exports = router;