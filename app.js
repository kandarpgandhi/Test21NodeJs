const express = require('express')
const mysql = require('mysql2')
const app = express()

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'bakor@11',
    database: 'testDb'
})

connection.connect((err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('Connection has been created')
    const creationQuery = `CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20),
    email VARCHAR(20)
)`

    connection.execute(creationQuery, (err) => {
        if (err) {
            console.log(err)
            connection.end()
            return
        }
        console.log('Table is created')
    })
})
app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(3000, (err) => {
    console.log("server is running")
})