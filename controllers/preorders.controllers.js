var preOrdersModel = require('../models').preOrdersModel;
var common = require('../utils/common.js');
var apiresponses = require('../utils/apiresponses.js')

exports.createOrder = (req, res) => {
    var body = req.body;
    var data = {
        seller_post_id: body.seller_post_id,
        buyer_id: body.buyer_id,
        qty: body.qty,
        unit_price: body.unit_price,
        createdAt: common.now(),
        updatedAt: common.now(),
    };
    var results = preOrdersModel.create(data);
    
    results.then((value) => {
        apiresponses.successResponse(req, res, "You Ordered Success", "");
    }).catch((err) => {
        apiresponses.errorResponse(req, res, `Sorry! ${err}`);
    });
}

exports.preorderList = async (req, res) => {

    var preorderList = await preOrdersModel.get_all();
    if(preorderList){
        apiresponses.successResponse(req, res, "Orders List", common.prettifyArray(preorderList));
        console.log("this is result"+preorderList);
    }else{
        apiresponses.errorResponse(req, res, `Error!`);
    }
}

exports.preorderDetails = (req, res) => {
    var id = req.params.id;
    preOrdersModel.find(id).then((value) => {
        apiresponses.successResponse(req, res, "Details", value);
    }).catch((err) => {
        apiresponses.errorResponse(req, res, err);
    });
}

exports.updatePreorder = (req, res) => {
    var id = req.params.id;
    var data = req.body;
    preOrdersModel.update(id, data).then((value) => {
        apiresponses.successResponse(req, res, "Updated!", "");
    }).catch((err) => {
        apiresponses.errorResponse(req, res, err);
    });
}

exports.deletePreorder = (req, res) => {
    var id = req.params.id;
    preOrdersModel.delete(id).then((value) => {
        apiresponses.successResponse(req, res, "Deleted!", "");
    }).catch((err) => {
        apiresponses.errorResponse(req, res, err);
    });
}