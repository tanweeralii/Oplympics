var db_connection = require('./../../db/connect');
var mysql = require("mysql");
var connection = mysql.createConnection(db_connection);

function get_fans(req, res){
    let sql = 'SELECT fans from claps WHERE country=?';
    data = [req.country];
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

function post_fans(req, res){
    let sql = 'UPDATE claps SET fans=fans+1 WHERE country=?';
    data = [req.country];
    connection.query(sql, data, (error, results, fields) => {
        if (error){
            res.json({ error: err })
        }
        console.log('Rows affected:', results.affectedRows);
        res.json({
            message: "success",
        });
    });
    connection.end();
}

module.exports = {
    get_fans,
    post_fans
};