var mongoose = require('mongoose');//requiriendo mongoose
const { type } = require('os');
var esquema = new mongoose.Schema(//declarando esquema
    {
        planes: {type:String},
        descripcion: {type:String},
        precio: {type:String}
    }
);

module.exports = mongoose.model('planes', esquema);// exportando el modelo, enlazando esquema
