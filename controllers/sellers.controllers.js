var sellerModel = require('../models').sellerModel;
var common = require('../utils/common.js');
var apiresponses = require('../utils/apiresponses.js')

exports.createSeller = (req, res) => {
    var body = req.body;
    var data = {
        seller_name: body.seller_name,
        seller_email: body.seller_email,
        seller_password: common.encryptPassword(body.seller_password),
        seller_phoneNumber: body.seller_phoneNumber,
        seller_address: body.seller_address,
        createdAt: common.now(),
        updatedAt: common.now(),
    };
    var results = sellerModel.create(data);
    
    results.then((value) => {
        apiresponses.successResponse(req, res, "Account Successfully Created", "");
    }).catch((err) => {
        apiresponses.errorResponse(req, res, `Sorry! ${err}`);
    });
}

exports.sellerList = async (req, res) => {
    var sellerList = await sellerModel.get_all();
    if(sellerList){
        apiresponses.successResponse(req, res, "Seller List", common.prettifyArray(sellerList));
        console.log("this is result"+sellerList);
    }else{
        apiresponses.errorResponse(req, res, `Error!`);
    }
}

exports.sellerDetails = (req, res) => {
    var id = req.params.id;
    sellerModel.find(id).then((value) => {
        apiresponses.successResponse(req, res, "Details", value);
    }).catch((err) => {
        apiresponses.errorResponse(req, res, err);
    });
}

exports.updateSeller = (req, res) => {
    var id = req.params.id;
    var data = req.body;
    sellerModel.update(id, data).then((value) => {
        apiresponses.successResponse(req, res, "Updated!", "");
    }).catch((err) => {
        apiresponses.errorResponse(req, res, err);
    });
}

exports.deleteSeller = (req, res) => {
    var id = req.params.id;
    sellerModel.delete(id).then((value) => {
        apiresponses.successResponse(req, res, "Deleted!", "");
    }).catch((err) => {
        apiresponses.errorResponse(req, res, err);
    });
}