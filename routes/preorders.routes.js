var preorderscontrollers = require('../controllers/preorders.controllers.js');


module.exports = function(app) {
    app.post('/preorders/create', preorderscontrollers.createOrder);
    app.get('/preorders/lists',preorderscontrollers.preorderList);    
    app.get('/preorders/details/:id', preorderscontrollers.preorderDetails); 
    app.patch('/preorders/lists/:id', preorderscontrollers.updatePreorder);
    app.delete('/preorders/lists/:id', preorderscontrollers.deletePreorder);
    
}