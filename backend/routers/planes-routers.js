var express = require('express');//importando express
var router = express.Router();//declarando objeto para las rutas
var Plan = require('../models/planes.modelos');
var mongoose = require('mongoose');//Modulo para utilzar el tipo de dato objectId

router.get('/', (req, res)=>{
    Plan.find({},{
        planes: true,
        descripcion: true,
        precio: true
    }).then(datos =>{
        res.send(datos);
        res.end();
    })
});

router.get(':idPlan', (req, res)=>{
    let idPlan = req.params.idPlan;
    Plan.find({},{
        planes: true,
        descripcion: true,
        precio: true
    }).then(datos =>{
        res.send(datos[0]);
        res.end();
    })
});

router.post('/', (req, res) => {
    let body = req.body;
    let plan = new Plan({
        planes: body.planes,
        descripcion: body.descripcion,
        precio: body.precio
    });
    plan.save().then(result => {
        res.send(result);
        res.end();
    }).catch(error => {
        res.send(error);
        res.end();
    });
});
router.delete('/:idPlan', (req, res) => {

    Plan.remove({ _id: req.params.idPlan })
        .then((data) => {
            res.json(data);
            res.end();
        })
        .catch((error) => {
            res.json(error);
            res.end();
        })
});
module.exports = router;