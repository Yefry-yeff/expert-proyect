var mongoose = require('mongoose');//requiriendo mongoose
const { type } = require('os');
var esquema = new mongoose.Schema(//declarando esquema
    {
        nombre: {type:String},
        descripcion: {type:String}
    }
);

module.exports = mongoose.model('categorias', esquema);// exportando el modelo, enlazando esquema