var db_connection = require('./../../db/connect');
var mysql = require("mysql");
var connection = mysql.createConnection(db_connection);


function get_all_schedule(req, res){
    let sql = 'SELECT * from schedule';
    connection.query(sql, (error, results, fields) => {
        if (error){
            res.json({ error: err })
        }
        console.log('Rows affected:', results.affectedRows);
        res.json({
            message: res.data,
        });
    });
    connection.end();
}

function get_live_schedule(req, res){
    let sql = 'SELECT * from schedule WHERE is_live=TRUE';
    connection.query(sql, (error, results, fields) => {
        if (error){
            res.json({ error: err })
        }
        console.log('Rows affected:', results.affectedRows);
        res.json({
            message: res.data,
        });
    });
    connection.end();
}

function get_schedule_country_wise(req, res){
    let sql = 'SELECT * from schedule WHERE county_1=? OR country_2=?';
    data = [req.countr, req.country];
    connection.query(sql, data, (error, results, fields) => {
        if (error){
            res.json({ error: err })
        }
        console.log('Rows affected:', results.affectedRows);
        res.json({
            message: res.data,
        });
    });
    connection.end();
}

function get_schedule_date_wise(req, res){
    let sql = 'SELECT * from schedule WHERE starts_at=?';
    data = [req.date_time];
    connection.query(sql, data, (error, results, fields) => {
        if (error){
            res.json({ error: err })
        }
        console.log('Rows affected:', results.affectedRows);
        res.json({
            message: res.data,
        });
    });
    connection.end();
}

module.exports = {
    get_all_schedule,
    get_live_schedule,
    get_schedule_country_wise,
    get_schedule_date_wise
}