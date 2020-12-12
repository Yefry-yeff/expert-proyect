var express = require('express');//importando express
var router = express.Router();//declarando objeto para las rutas
var Empresa = require('../models/empresa.modelo');
var mongoose = require('mongoose');//Modulo para utilzar el tipo de dato objectId

router.get('/', (req, res)=>{
    Empresa.find({},{
        nombreEmpresa: true,
        correoEmpresa: true,
        direccion: true,
        descripcion: true,
        productos: true,
        categoria: true,
        productosCategoria:true,
        paginas:true,
        plan: true,
        bancoImagenes: true
    }).then(datos =>{
        res.send(datos);
        res.end();
    })
});

router.get(':idEmpresa', (req, res)=>{
    let idEmpresa = req.params.idEmpresa;
    Empresa.find({},{
        nombreEmpresa: true,
        correoEmpresa: true,
        direccion: true,
        descripcion: true,
        productos: true,
        categoria: true,
        productosCategoria:true,
        paginas:true,
        plan: true,
        bancoImagenes: true
    }).then(datos =>{
        res.send(datos[0]);
        res.end();
    })
});

router.post('/', (req, res) => {
    let body = req.body;
    let empresa = new Empresa({
        nombreEmpresa: body.nombreEmpresa,
        correoEmpresa: body.CorreoEmpresa,
        direccion: body.direccion,
        descripcion: body.descripcion,
        productos:body.productos,
        categoria: body.categoria,
        productosCategoria:body.productosCategoria,
        paginas:body.paginas,
        plan: body.plan,
        password: body.password,
        bancoImagenes: body.bancoImagenes
    });
    empresa.save().then(result => {
        res.send(result);
        res.end();
    }).catch(error => {
        res.send(error);
        res.end();
    });
});

router.post('/categoria/:idEmpresa', function (req, res) {

    let body = req.body;
    let idEmpresa = req.params.idEmpresa;

    Empresa.update(
        {
            _id: idEmpresa,
        },
        {
            $push: {
                "categorias": {
                    _id: mongoose.Types.ObjectId(),
                    nombre: body.nombre,
                    descripcion: body.descripcion
                }
            }
        }
    ).then(result => {
        res.send(result);
        res.end();
    }).catch(error => {
        res.send(error);
        res.end();
    });
});


module.exports = router;
