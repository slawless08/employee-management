const mysql = require('mysql');

const connectDatabase = () => {

const db_username = process.env.DB_USER;
const db_password = process.env.DB_PASSWORD;
const db_name = process.env.DB_NAME;

const db = mysql.createConnection(
    {
    host: 'localhost',
    user: db_username,
    password: db_password,
    database: db_name
    },
    console.log(`Connected to database: ${db_name}`)
);

};

module.exports = connectDatabase;