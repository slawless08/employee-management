use employee_management_db;

insert into department (id, department_name)
    values 
        (1, "Marketing"),
        (2, "Information Technology"),
        (3, "Human Resources");

insert into role (id, title, salary, department_id)
    values
        (1, "Consultant", 65000, 1),
        (2, "Intern", 0, 2),
        (3, "Senior Developer", 85000, 2),
        (4, "Human Resources Director", 75000, 3);

insert into employee (id, first_name, last_name, role_id, manager_id)
    values 
        (1, "Sam", "Lawless", 2, 2),
        (1, "Roger", "Le", 3, 3),
        (1, "Harry", "Potter", 4, 4),
        (1, "Ronald", "Weasely", 2, 2),
        (1, "Hermoine", "Granger", 1, 1),