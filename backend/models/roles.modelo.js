var mongoose = require('mongoose');//requiriendo mongoose
const { type } = require('os');
var esquema = new mongoose.Schema(//declarando esquema
    {
        rol: {type:String},
        descripcion: {type:String}
    }
);

module.exports = mongoose.model('roles', esquema);// exportando el modelo, enlazando esquema