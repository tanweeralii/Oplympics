var db_connection = require('./../../db/connect');
var mysql = require("mysql");
var connection = mysql.createConnection(db_connection);

function get_medals(req, res){
    let sql = 'SELECT * from claps WHERE country=?';
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

function post_medals(req, res){
    if(req.medal=="gold"){
        let sql = 'UPATE update_medal gold=gold+1 WHERE country=? ';
    }
    else if(req.medal=="silver"){
        let sql = 'UPATE update_medal silver=silver+1 WHERE country=?';
    }
    else{
        let sql = 'UPATE update_medal bronze=bronze+1 WHERE country=?';
    }
    data = [req.country];
    connection.query(sql, data, (error, results, fields) => {
        if (error){
            res.json({ error: err })
        }
        console.log('Rows affected:', results.affectedRows);
        res.json({
            message: "Success",
        });
    });
    connection.end();
}

module.exports = {
    get_medals,
    post_medals
}