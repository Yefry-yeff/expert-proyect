var express = require('express');//importando express
var router = express.Router();//declarando objeto para las rutas
var usuario = require('../models/usuario.modelo');
var mongoose = require('mongoose');//Modulo para utilzar el tipo de dato objectId

router.get('/', (req, res)=>{
    usuario.find({},{
        nombreUsuario: true,
        apellidoUsuario: true,
        nickNameUsuario: true,
        edadUsuario: true,
        direccionUsiario: true,
        emailUsuario: true,
        rolUsuario: true,
        carrito: true
    }).then(datos =>{
        res.send(datos);
        res.end();
    })
});

router.get(':idUsuario', (req, res)=>{
    let idUsuario = req.params.idUsuario;
    usuario.find({},{
        nombreUsuario: true,
        apellidoUsuario: true,
        nickNameUsuario: true,
        edadUsuario: true,
        direccionUsiario: true,
        emailUsuario: true,
        rolUsuario: true,
        carrito: true
    }).then(datos =>{
        res.send(datos[0]);
        res.end();
    })
});

router.post('/', (req, res) => {
    let body = req.body;
    let u = new usuario({
        nombreUsuario: body.nombreUsuario,
        apellidoUsuario: body.apellidoUsuario,
        nickNameUsuario: body.nickNameUsuario,
        edadUsuario: body.edadUsuario,
        direccionUsiario: body.direccionUsiario,
        emailUsuario: body.emailUsuario,
        password: body.password,
        rolUsuario: body.rolUsuario,
        carrito: []
    });
    u.save().then(result => {
        res.send(result);
        res.end();
    }).catch(error => {
        res.send(error);
        res.end();
    });
});

module.exports = router;
