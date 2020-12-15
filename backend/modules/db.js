/*CONNEXION A BASE DE DATOS*/

var mongoose = require('mongoose');

var servidor = 'localhost:27017';
var db = 'yeffShop';

class Database{
    constructor(){
        //Promesas
        
        mongoose.connect(`mongodb+srv://yeffcode:YEFRY..yo18@cluster0.63vpz.mongodb.net/<dbname>?retryWrites=true&w=majority`)
        //mongoose.connect(`mongodb://${servidor}/${db}`)

        .then(()=>{
            console.log('Conexion a MONGODB Realizada');
        }).catch((error)=>{
            console.log(error);
        });
    }
}

module.exports = new Database();