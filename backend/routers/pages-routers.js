var express = require('express');//importando express
var router = express.Router();//declarando objeto para las rutas
var Page = require('../models/pages.modelo');
var mongoose = require('mongoose');//Modulo para utilzar el tipo de dato objectId

router.get('/', (req, res)=>{
    Page.find({},{
        plantilla: true,
        colorPrincipal: true,
        colorSecunario: true,
        navbarColor: true
    }).then(datos =>{
        res.send(datos);
        res.end();
    })
});

router.get(':idPage', (req, res)=>{
    let idPage = req.params.idPage;
    Page.find({},{
        plantilla: true,
        colorPrincipal: true,
        colorSecunario: true,
        navbarColor: true
    }).then(datos =>{
        res.send(datos[0]);
        res.end();
    })
});

router.post('/', (req, res) => {
    let body = req.body;
    let page = new Page({
        plantilla: body.plantilla,
        colorPrincipal: body.colorPrincipal,
        colorSecunario: body.colorSecunario,
        navbarColor: body.navbarColor
    });
    page.save().then(result => {
        res.send(result);
        res.end();
    }).catch(error => {
        res.send(error);
        res.end();
    });
});

module.exports = router;