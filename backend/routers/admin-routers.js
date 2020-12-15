var express = require('express');//importando express
var router = express.Router();//declarando objeto para las rutas
var Admin = require('../models/admin.modelo');
var mongoose = require('mongoose');//Modulo para utilzar el tipo de dato objectId

router.get('/', (req, res)=>{
    admin.find({},{
        nombreAdmin: true,
        apellidoAdmin: true,
        emailAdmin: true,
        password:true
    }).then(datos =>{
        res.send(datos);
        res.end();
    })
});

router.get(':idAdmin', (req, res)=>{
    let idAdmin = req.params.idAdmin;
   admin.find({},{
        nombreAdmin: true,
        apellidoAdmin: true,
        emailAdmin: true,
        password:true
    }).then(datos =>{
        res.send(datos[0]);
        res.end();
    })
});

router.post('/', (req, res) => {
    let body = req.body;
    let admin = new Admin({
        nombreAdmin: body.nombreAdmin,
        apellidoAdmin: body.apellidoAdmin,
        emailAdmin: body.emailAdmin,
        password:body.password
    });
    admin.save().then(result => {
        res.send(result);
        res.end();
    }).catch(error => {
        res.send(error);
        res.end();
    });
});
router.post('/login', function (req, res) {
    Admin.findOne({ emailAdmin: req.body.emailAdmin, password: req.body.password }, {})
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