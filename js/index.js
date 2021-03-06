const inquirer = require("inquirer");


const init = () => {

    const mysql = require("mysql");
    const inquirer = require("inquirer");
    const cTable = require('console.table');

    const viewData = require('./view_data');
    const addData = require('./add_data');
    const updateRole = require('./update_role')

    const main = () => {
        inquirer
            .prompt(
                [
                    {
                        type: 'list',
                        name: 'menu',
                        message: 'How can I help you?',
                        choices: [
                            "View employess, departments or roles", "Add department, role, or employee", "Update employee role", "Exit"
                        ],
                    },
                ],
            ).then((answer) => {
                switch (answer.menu) {
                    case "View employess, departments or roles":
                        viewData();
                        break;
                    case "Add department, role, or employee":
                        addData();
                        break;
                    case "Update employee role":
                        updateRole();
                        break;
                    case "Exit":
                        console.log("Thank you for using this application!");
                        break;
                }
            })
    };

    main();
};

module.exports = init;