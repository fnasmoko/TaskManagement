const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: '',
    password: '',
    database: 'task_management'
})

module.exports = db