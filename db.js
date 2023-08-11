const mysql = require('mysql2');

const conn = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'mgr',
    password: '1234'
});/*
conn.execute("SELECT * FROM users LIMIT 2", function(err, result){
    if(err)throw err;
    console.log(result);
});*/


module.exports=conn;
/*
conn.getConnection(function(err){
    if(err)
    throw err;
    console.log('success')
});*/