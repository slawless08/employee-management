const viewData = () => {

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

    inquirer
        .prompt([
            {
                type: 'list',
                name: 'views',
                message: 'Which would you like to view?',
                choices: [
                    'View employees', 'View departments', 'View roles',
                ]
            }
        ]).then((answer) => {
            switch (answer.views) {
                case 'View employees':
                    viewEmployees();
                    break;
                case 'View departments':
                    viewDepartments();
                    break;
                case 'View roles':
                    viewRoles();
                    break;
            }
        })


    const viewEmployees = () => {
        db.query("SELECT * FROM employee;", (err, results) => {
            console.table(results);
        });
    };

    const viewDepartments = () => {
        db.query("SELECT * FROM departments;", (err, results) => {
            console.table(results);
        });
    };

    const viewRoles = () => {
        db.query("SELECT * FROM role;", (err, results) => {
            console.table(results);
        });
    };

};

module.exports = viewData;

