const conn = require('./db');

conn.execute("SELECT * FROM users WHERE user_id=? LIMIT 2",[5], function(err, result, fields){
    if(err)throw err;
    console.log(result);
});
/*
// execute will internally call prepare and query
conn.execute(
    'SELECT * FROM `users` WHERE `user_id` = ?',
    [5],
    function(err, results, fields) {
      console.log(results); // results contains rows returned by server
      //console.log(fields); // fields contains extra meta data about results, if available
  
      // If you execute same statement again, it will be picked from a LRU cache
      // which will save query preparation time and give better performance
    }
  );*/