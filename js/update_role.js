const inquirer = require("inquirer");

const mysql = require('mysql');
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
);

const cTable = require('console.table');

const updateRole= () => {
    inquirer
    .prompt([
        {
            type:'input',
            name:'employeeID',
            message:'Enter the employee ID of the employee you would like to update.'
        },
        {
            type:'input',
            name:'updateFirst',
            message:'First name?'
        },
        {
            type:'input',
            name:'updateLast',
            message:'Last name?'
        },
        {
            type:'input',
            name:'updateRoleID',
            message:'Role id?'
        },
        {
            type:'input',
            name:'updateManagerID',
            message:'Manager id?'
        }
        
    ]).then((answers) => {
        db.query(`UPDATE employee SET first_name = "${answers.updateFirst}", last_name = "${answers.updateLast}", role_id = "${answers.updateRoleID}", manager_id = "${answers.updateManagerID}" WHERE id = "${answers.employeeID}";`);
        db.query("SELECT * FROM employee", (err,results) => {
            console.table(results);
        })
    })
};

module.exports = updateRole;