const Controller = require('./app/Controllers/sale');

module.exports = (app) => {
   app.get('/sale', Controller.salesDataGet);
   app.post('/sale', Controller.salesDataPost);
   app.patch('/sale', Controller.salesDataPatch);
   app.delete('/sale', Controller.salesDataDelete);
}