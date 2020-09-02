const mysql = require('mysql');
const connection = mysql.createConnection(config.mysql);
 
connection.connect(function(err) {
    if (err) {
        console.log(prefix + "Error Logging in!");
        return;
    }
   
    console.log(prefix + 'Connected as id ' + connection.threadId);
});