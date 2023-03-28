var sellerPostModel = require('../models').sellerPostModel;
var common = require('../utils/common.js');
var apiresponses = require('../utils/apiresponses.js')

exports.createPost = (req, res) => {
    var body = req.body;
    var data = {
        seller_id: body.seller_id,
        description: body.description,
        qty: body.qty,
        unit_price: body.unit_price,
        createdAt: common.now(),
        updatedAt: common.now(),
    };
    var results = sellerPostModel.create(data);
    
    results.then((value) => {
        apiresponses.successResponse(req, res, "Posted", "");
    }).catch((err) => {
        apiresponses.errorResponse(req, res, `Sorry! ${err}`);
    });
}

exports.postsList = async (req, res) => {
    var postsList = await sellerPostModel.get_all();
    if(postsList){
        apiresponses.successResponse(req, res, "Posts List", common.prettifyArray(postsList));
        console.log(`This is Post List ${postsList}`);
    }else{
        apiresponses.errorResponse(req, res, `Error!`);
    }
}

exports.postsDetails = (req, res) => {
    var id = req.params.id;
    sellerPostModel.find(id).then((value) => {
        apiresponses.successResponse(req, res, "Details", value);
    }).catch((err) => {
        apiresponses.errorResponse(req, res, err);
    });
}

exports.updatePosts = (req, res) => {
    var id = req.params.id;
    var data = req.body;
    sellerPostModel.update(id, data).then((value) => {
        apiresponses.successResponse(req, res, "Updated!", "");
    }).catch((err) => {
        apiresponses.errorResponse(req, res, err);
    });
}

exports.deletePosts = (req, res) => {
    var id = req.params.id;
    sellerPostModel.delete(id).then((value) => {
        apiresponses.successResponse(req, res, "Deleted!", "");
    }).catch((err) => {
        apiresponses.errorResponse(req, res, err);
    });
}