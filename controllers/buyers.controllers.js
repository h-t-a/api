var buyerModel = require('../models').buyerModel;
var common = require('../utils/common.js');
var apiresponses = require('../utils/apiresponses.js')

exports.createBuyer = (req, res) => {
    var body = req.body;
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
    
    results.then((value) => {
        apiresponses.successResponse(req, res, "Account Successfully Created", "");
    }).catch((err) => {
        apiresponses.errorResponse(req, res, `Sorry! ${err}`);
    });
}

exports.buyerList = async (req, res) => {
    console.log(`this is request ${req}`);
    console.log(`this is response ${res}`);

    var buyerList = await buyerModel.get_all();
    if(buyerList){
        apiresponses.successResponse(req, res, "Buyer List", common.prettifyArray(buyerList));
        console.log("this is result"+buyerList);
    }else{
        apiresponses.errorResponse(req, res, `Error!`);
    }
}