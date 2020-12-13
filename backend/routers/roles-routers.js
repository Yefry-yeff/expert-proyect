var express = require('express');//importando express
var router = express.Router();//declarando objeto para las rutas
var Rol = require('../models/roles.modelo');
var mongoose = require('mongoose');//Modulo para utilzar el tipo de dato objectId

router.get('/', (req, res)=>{
    Rol.find({},{
        rol: true,
        descripcion: true
    }).then(datos =>{
        res.send(datos);
        res.end();
    })
});

router.get(':idRol', (req, res)=>{
    let idRol = req.params.idRol;
    Rol.find({},{
        rol: true,
        descripcion: true
    }).then(datos =>{
        res.send(datos[0]);
        res.end();
    })
});
router.delete('/:idRol', (req, res) => {

    Rol.remove({ _id: req.params.idRol})
        .then((data) => {
            res.json(data);
            res.end();
        })
        .catch((erro) => {
            res.json(error);
            res.end();
        })
});
router.post('/', (req, res) => {
    let body = req.body;
    let rol = new Rol({
        rol: body.rol,
        descripcion: body.descripcion
    });
    rol.save().then(result => {
        res.send(result);
        res.end();
    }).catch(error => {
        res.send(error);
        res.end();
    });
});

module.exports = router;