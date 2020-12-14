var express = require('express');
var cors = require('cors'); //Para gestionar politicas de dominios cruzados
var bodyParser = require('body-parser');
var database = require('./modules/db'); //Referencias a la base de datos
var app = express();

app.use(cors());//midlewordl dominios cruzados
app.use(bodyParser.json());//Para poblr el json
app.use(bodyParser.urlencoded({ extended: true }));//Para poblar el json


var usuarioRouter = require('./routers/usuarios-routers');
app.use('/usuario', usuarioRouter);//TODO LO QUE VENGA CON /USUARIO ME LO ENVIA QUI

var empresaRouter = require('./routers/empresa-routers');
app.use('/empresa', empresaRouter);

var categoriaRouter = require('./routers/categoria-routers');
app.use('/categoria', categoriaRouter);

var adminRouter = require('./routers/admin-routers');
app.use('/admin', adminRouter);

var planesRouter = require('./routers/planes-routers');
app.use('/planes', planesRouter);

var rolesRouter = require('./routers/roles-routers');
app.use('/roles', rolesRouter);

var pageRouter = require('./routers/pages-routers');
app.use('/pages', pageRouter);

var productoRouter = require('./routers/producto-routers');
app.use('/productos', productoRouter);

app.listen(8888, ()=>{
    console.log('Servidor del backend levantado en 8888');
});
