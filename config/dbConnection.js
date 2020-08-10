var mysql = require('mysql');

var connection = function(){

    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'cursonode'
    });

}

module.exports = function(){
  return connection;
}
