const UsuarioController = require('./app/Controllers/sale');

module.exports = (app) => {
   app.get('/sale', UsuarioController.salesDataGet);
   app.post('/sale', UsuarioController.salesDataPost);
   app.patch('/sale', UsuarioController.salesDataPatch);
   app.delete('/sale', UsuarioController.salesDataDelete);
}