let mysql = require('mysql');

let connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'root',
    database : 'todolist',
    socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
})

connection.connect()

module.exports = connection