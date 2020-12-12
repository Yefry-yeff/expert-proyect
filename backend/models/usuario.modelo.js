var mongoose = require('mongoose');//requiriendo mongoose
const { type } = require('os');
var esquema = new mongoose.Schema(//declarando esquema
    {
        nombreUsuario: {type:String},
        apellidoUsuario: {type:String},
        nickNameUsuario: {type:String},
        edadUsuario: {type:String},
        direccionUsiario:{type:String},
        emailUsuario: {type:String},
        rolUsuario: {type:String},
        password:{type:String},
        carrito: {type:Array}
    }
);

module.exports = mongoose.model('usuario', esquema);// exportando el modelo, enlazando esquema