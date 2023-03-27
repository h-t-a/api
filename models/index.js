const Model = require('./model');

class buyerModel extends Model {
    constructor(){
        super('tbl_buyer');
    }
}
class sellerModel extends Model {
    constructor(){
        super('tbl_seller');
    }
}

class preOrdersModel extends Model {
    constructor(){
        super('pre_order');
    }
}

class sellerPostModel extends Model {
    constructor(){
        super('seller_post');
    }
}

class adminModel extends Model {
    constructor(){
        super('tbl_admin');
    }
}
exports.buyerModel = new buyerModel;
exports.sellerModel = new sellerModel;
exports.preOrdersModel = new preOrdersModel;
exports.sellerPostModel = new sellerPostModel;
exports.adminModel = new adminModel;