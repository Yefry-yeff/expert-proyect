var mongoose = require('mongoose');//requiriendo mongoose
const { type } = require('os');
var esquema = new mongoose.Schema(//declarando esquema
    {
        nombreAdmin: {type:String},
        apellidoAdmin: {type:String},
        emailAdmin: {type:String},
        password:{type:String}
    }
);

module.exports = mongoose.model('admin', esquema);// exportando el modelo, enlazando esquema