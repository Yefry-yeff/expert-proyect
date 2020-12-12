var mongoose = require('mongoose');//requiriendo mongoose
const { type } = require('os');
var esquema = new mongoose.Schema(//declarando esquema
    {
        plantilla: {type:String},
        colorPrincipal: {type:String},
        colorSecunario: {type:String},
        navbarColor: {type:String}
    }
);

module.exports = mongoose.model('pages', esquema);// exportando el modelo, enlazando esquema