var mongoose = require('mongoose');//requiriendo mongoose
const { type } = require('os');
var esquema = new mongoose.Schema(//declarando esquema
    {
        emailAdmin: {type:String},
        password:{type:String}
    }
);

module.exports = mongoose.model('admins', esquema);// exportando el modelo, enlazando esquema