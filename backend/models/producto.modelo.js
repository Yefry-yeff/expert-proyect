var mongoose = require('mongoose');//requiriendo mongoose
const { type } = require('os');
var esquema = new mongoose.Schema(//declarando esquema
    {
        productoCanasta: {type:String},
        descripcion: {type:String},
        precio: {type:String}
    }
);

module.exports = mongoose.model('productos', esquema);// exportando el modelo, enlazando esquema