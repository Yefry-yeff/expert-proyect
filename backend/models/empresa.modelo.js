var mongoose = require('mongoose');//requiriendo mongoose
const { type } = require('os');
var esquema = new mongoose.Schema(//declarando esquema
    {
        nombreEmpresa: {type:String},
        correoEmpresa: {type:String},
        direccion: {type:String},
        descripcion: {type:String},
        productos: {type:Array},
        categoria: {type:Array},
        productosCategoria:{type:Array},
        paginas:{type:Array},
        plan: {type:String},
        password: {type:String},
        bancoImagenes: {type:Array}
    }
);

module.exports = mongoose.model('empresa', esquema);// exportando el modelo, enlazando esquema