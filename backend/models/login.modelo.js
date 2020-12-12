var mongoose = require('mongoose');//requiriendo mongoose
const { type } = require('os');
var esquema = new mongoose.Schema(//declarando esquema
    {
        nickNameUsuario: {type:String},
        password:{type:String}
    }
);

module.exports = mongoose.model('login', esquema);// exportando el modelo, enlazando esquema