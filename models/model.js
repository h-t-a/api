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
                let data = tbl.find(result.id);
                data.then((value) => resolve(value))
                .catch((err) => reject(err));
            });
        });
    }

    find(id){
        let tbl = this;
        return new Promise((resolve, reject) => {
            mysql2.query_filter('SELECT * FROM ?? WHERE id = ?', [tbl.table, id], (error, result) => {
                if(error) throw error;
                resolve(result[0]);
            });
        });
    }

    // findName(id){
    //     let tbl = this;
    //     return new Promise((resolve, reject) => {
    //         mysql2.query_filter('SELECT * FROM ?? WHERE id = ?', [tbl.table, id], (error, result) => {
    //             if(error) throw error;
    //             resolve(result[0]);
    //             console.log(`tbll:${tbl.table}`)

    //         });
    //     });
    // }

    // findCol(id) {
    //     let tbl = this;
    //     return new Promise((resolve, reject) => {
    //       mysql2.query_filter(`SELECT
    //         ${tbl.table}.id,
    //         ${tbl.table}.seller_id,
    //         (SELECT seller_name FROM tbll_seller WHERE id = ${tbl.table}.seller_id) as seller,
    //         ${tbl.table}.description,
    //         ${tbl.table}.qty,
    //         ${tbl.table}.unit_price,
    //         (SELECT seller_profile FROM tbll_seller WHERE id=${tbl.table}.seller_id)as Profile
    //         FROM ${tbl.table}
    //         WHERE ${tbl.table}.id = ?`, [id], (error, result) => {
    //         if (error) throw error;
    //         resolve(result[0]);
    //         console.log(`tbll:${tbl.table}`);
    //       });
    //     });
    //   }
    
    update(id, data){
        let tbl = this;
        return new Promise((resolve, reject) => {
            mysql2.query_filter('UPDATE  ?? SET ? WHERE id = ?', [tbl.table, data, id], (error, result) => {
                let data = tbl.find(id);
                data.then((value) => resolve(value))
                .catch((err) => reject(err));
            });
        });
    }

    delete(id){
        let tbl = this;
        return new Promise((resolve, reject) => {
            mysql2.query_filter('DELETE FROM  ??  WHERE id = ?', [tbl.table, id], (error, result) => {
                if(error) throw error;
                resolve('Success');
            });
        });
    }
}
