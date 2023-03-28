var postControllers = require('../controllers/sellerposts.controllers.js');


module.exports = function(app) {
    app.post('/posts/create', postControllers.createPost);
    app.get('/posts/lists',postControllers.postsList);    
    app.get('/posts/details/:id', postControllers.postsDetails); 
    app.put('/posts/lists/:id', postControllers.updatePosts);
    app.delete('/posts/lists/:id', postControllers.deletePosts);
    
}