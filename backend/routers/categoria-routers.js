var express = require('express');//importando express
var router = express.Router();//declarando objeto para las rutas
var Categoria = require('../models/categoria.modelo');

var mongoose = require('mongoose');//Modulo para utilzar el tipo de dato objectId

router.get('/', (req, res)=>{
    Categoria.find({},{
        nombre: true,
        descripcion: true
    }).then(datos =>{
        res.send(datos);
        res.end();
    })
});

router.get(':idCategoria', (req, res)=>{
    let idCategoria = req.params.idCategoria;
    empresa.find({},{
        nombre: true,
        descripcion: true
    }).then(datos =>{
        res.send(datos[0]);
        res.end();
    })
});

router.post('/', (req, res) => {
    let body = req.body;
    let categoria = new Categoria({
        nombre: body.nombre,
        descripcion: body.descripcion
    });
    categoria.save().then(result => {
        res.send(result);
        res.end();
    }).catch(error => {
        res.send(error);
        res.end();
    });
});


module.exports = router;