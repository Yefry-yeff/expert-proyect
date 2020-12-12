var express = require('express');//importando express
var router = express.Router();//declarando objeto para las rutas
var producto = require('../models/producto.modelo');
var mongoose = require('mongoose');//Modulo para utilzar el tipo de dato objectId


router.get('/', (req, res)=>{
    producto.find({},{
        productoCanasta: true,
        descripcion: true,
        precio: true
    }).then(datos =>{
        res.send(datos);
        res.end();
    })
});

router.get(':idProducto', (req, res)=>{
    let idProducto = req.params.idProducto;
    producto.find({},{
        productoCanasta: true,
        descripcion: true,
        precio: true
    }).then(datos =>{
        res.send(datos[0]);
        res.end();
    })
});

router.post('/', (req, res) => {
    let body = req.body;
    let producto = new producto({
        productoCanasta: body.productoCanasta,
        descripcion: body.descripcion,
        precio: body.precio
    });
    producto.save().then(result => {
        res.send(result);
        res.end();
    }).catch(error => {
        res.send(error);
        res.end();
    });
});

module.exports = router;