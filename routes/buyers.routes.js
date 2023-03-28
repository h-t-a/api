var buyercontroller = require('../controllers/buyers.controllers');


module.exports = function(app) {
    app.post('/buyers/create', buyercontroller.createBuyer);
    app.get('/buyers/lists',buyercontroller.buyerList);
    app.get('/buyers/details/:id', buyercontroller.buyerDetails); 
    app.patch('/buyers/lists/:id', buyercontroller.updateBuyer);
    app.delete('/buyers/lists/:id', buyercontroller.deleteBuyer);
}