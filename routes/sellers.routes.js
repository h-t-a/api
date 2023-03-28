var sellerController = require('../controllers/sellers.controllers.js');


module.exports = function(app) {
    app.post('/sellers/create', sellerController.createSeller);
    app.get('/sellers/lists',sellerController.sellerList);    
    app.get('/sellers/details/:id', sellerController.sellerDetails); 
    app.patch('/sellers/lists/:id', sellerController.updateSeller);
    app.delete('/sellers/lists/:id', sellerController.deleteSeller);
}