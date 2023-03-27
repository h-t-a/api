var sellerController = require('../controllers/sellers.controllers.js');


module.exports = function(app) {
    app.post('/seller/create', sellerController.createSeller);
    app.get('/seller/list',sellerController.sellerList);
    
}