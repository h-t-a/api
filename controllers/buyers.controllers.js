var buyerModel = require('../models').buyerModel;
var common = require('../utils/common.js');
var apiresponses = require('../utils/apiresponses.js')

exports.createBuyer = (req, res) => {
    var body = req.body;
    console.log(`This is buyer list body ${body}`);
    var data = {
        buyer_name: body.buyer_name,
        buyer_email: body.buyer_email,
        buyer_password: common.encryptPassword(body.buyer_password),
        buyer_phoneNumber: body.buyer_phoneNumber,
        buyer_address: body.buyer_address,
        createdAt: common.now(),
        updatedAt: common.now()
    };
    var results = buyerModel.create(data);
    console.log(`This is Results: ${results}`);
    results.then((value) => {
        apiresponses.successResponse(req, res, "Account Successfully Created", "");
    }).catch((err) => {
        apiresponses.errorResponse(req, res, `Sorry! ${err}`);
    });
}

exports.buyerList = async (req, res) => {

    var buyerList = await buyerModel.get_all();    if(buyerList){
        apiresponses.successResponse(req, res, "Buyer List", common.prettifyArray(buyerList));
    }else{
        apiresponses.errorResponse(req, res, `Error!`);
    }
    console.log(`This is buyerList: ${buyerList}`);
}

exports.buyerDetails = (req, res) => {
    var id = req.params.id;
    buyerModel.find(id).then((value) => {
        apiresponses.successResponse(req, res, "Details", value);
    }).catch((err) => {
        apiresponses.errorResponse(req, res, err);
    });
}

exports.updateBuyer = (req, res) => {
    var id = req.params.id;
    var data = req.body;
    buyerModel.update(id, data).then((value) => {
        apiresponses.successResponse(req, res, "Updated!", "");
    }).catch((err) => {
        apiresponses.errorResponse(req, res, err);
    });
}

exports.deleteBuyer = (req, res) => {
    var id = req.params.id;
    buyerModel.delete(id).then((value) => {
        apiresponses.successResponse(req, res, "Deleted!", "");
    }).catch((err) => {
        apiresponses.errorResponse(req, res, err);
    });
}