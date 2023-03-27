const mysql2 = require('../helpers/database');



module.exports = class Model {
    constructor(table){
        this.table = table;
    }

    get_all(){
        let tbl = this;
        return new Promise((resolve, reject) => {
            mysql2.query_filter('SELECT * FROM ??', [tbl.table], (error, result) => {
                if(error) throw error;
                resolve(result);
            });
        });
    }

    create(data){
        let tbl = this;
        return new Promise((resolve, reject) => {
            mysql2.query_filter('INSERT INTO ?? SET ?', [tbl.table, data], (error, result) => {
                if(error) throw error;
                let data = tbl.find(result.insertId);
                data.then((value) => resolve(value))
                .catch((err) => reject(err));
            });
        });
    }

    find(id){
        let tb = this;
        return new Promise((resolve, reject) => {
            mysql2.query_filter('SELECT * FROM ?? WHERE id = ?', [tb.table, id], (error, result) => {
                if(error) throw error;
                resolve(result[0]);
            });
        });
    }
}
