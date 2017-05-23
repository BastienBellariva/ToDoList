let connection = require('../config/db')

class Task {

    static create(content, cb) {
        connection.query('INSERT INTO tasks SET task = ?, date = ?', [content, new Date()], (err, result) => {
            if (err) throw err
            cb(result)
        })
    }

    static all(cb) {
        connection.query('SELECT * FROM tasks', (err, rows) => {
            if (err) throw err
            cb(rows)
        })
    }

}

module.exports = Task