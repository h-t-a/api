var buyercontroller = require('../controllers/buyers.controllers');


module.exports = function(app) {
    app.post('/buyer/create', buyercontroller.createBuyer);
    app.get('/buyer/list',buyercontroller.buyerList);
    
}