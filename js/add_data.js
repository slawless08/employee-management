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

const addData = () => {

    inquirer
        .prompt([
            {
                type: 'list',
                name: 'adds',
                message: 'What would you like to add?',
                choices: [
                    'Add employee', 'Add department', 'Add role',
                ]
            }
        ]).then((answer) => {
            switch (answer.views) {
                case 'Add employee':
                    addEmployee();
                    break;
                case 'Add department':
                    addDepartment();
                    break;
                case 'Add role':
                    addRole();
                    break;
            }
        });

};

const addEmployee = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'firstName',
                message: 'First name?',
            },
            {
                type: 'input',
                name: 'lastName',
                message: 'Last name?',
            },
            {
                type: 'input',
                name: 'roleId',
                message: 'Role id?',
            },
            {
                type: 'input',
                name: 'managerId',
                message: 'Manager id?',
            }
        ]).then((answers) => {
            db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) values ("${answers.firstName}", "${answers.lastName}", "${answers.roleId}", "${answers.managerId}");`);
            db.query(`SELECT * FROM employee`, (err, results) => {
                console.table(results);
            });
        })
};

const addDepartment = () => {
    inquirer
    .prompt([
        {
            type: 'input',
            name:'deptName',
            message:'Department name?'
        }
    ]).then((answers) => {
        db.query(`INSERT INTO departments (department_name) values ("${answers.deptName}");`);
        db.query('SELECT * FROM departments', (err,results) => {
            console.table(results);
        })
    });
};

const addRole = () => {
    inquirer
    .prompt([
        {
            type:'input',
            name:'title',
            message:'Role title?'
        },
        {
            type:'input',
            name:'salary',
            message:'Salary?'
        },
        {
            type:'input',
            name:'deptID',
            message:'Department id?'
        }

    ]).then((answers) => {
        db.query(`INSERT INTO role (title, salary, department_id) values ("${answers.title}", "${answers.salary}","${answers.deptID}");`);
        db.query("SELECT * FROM role", (err,results) => {
            console.table(results);
        })
    });
};


module.exports = addData;
module.exports = addEmployee;
module.exports = addRole;
module.exports = addDepartment;
