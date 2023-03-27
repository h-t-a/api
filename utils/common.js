
var moment = require('moment'); //A JavaScript date library for parsing, validating, manipulating, and formatting dates.    

exports.now = () => {
    const date = new Date();
    return moment(date).format('YYYY-MM-DD hh:mm:ss');
}

exports.prettifyArray = (data) => {
    data.forEach((value, index) => {
        Object.entries(value).forEach(entry => {
            //check null value
            if(entry[1] === null){
                value[entry[0]] = ''
            }

            //
            if(entry[1] instanceof Date){
                value[entry[0]] = moment(value[entry[0]]).format('YYYY-MM-DD hh:mm:ss');
            }
        });
    });
    return data;
}