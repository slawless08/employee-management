create database employee_management_db;

use database employee_management_db;

create table departments (
    id INT NOT NULL AUTO_INCREMENT,
    department_name VARCHAR(30),

    PRIMARY KEY (id)
);

create table role (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30),
    salary DECIMAL(9),
    department_id INT NOT NULL

    PRIMARY KEY id,
    FOREIGN KEY (department_id) references department(id)
);

create table employee (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT,

    PRIMARY KEY id,
    FOREIGN KEY (role_id) references role(id),
    FOREIGN KEY (manager_id) references role(id)
);