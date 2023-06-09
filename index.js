const inquirer = require('inquirer');
const mysql = require('mysql2');
const { displayEmployees, 
        addEmployee,
        updateRole,
        displayRoles,
        addRole,
        displayDepartments,
        addDepartment
        } = require('./work.js');


function initialQuestions(){
    inquirer
    .prompt([
        {
            type: 'list',
            choices: ['View All Employees', 
                      'Add Employee', 
                      'Update Employee Role',
                      'View All Roles',
                      'Add Role',
                      'View All Departments',
                      'Add Department',
                      'Quit'
                    ],
            message: 'What would you like to do?',
            name: 'choices'
        },
    ])
    .then(async (res) => {
        switch (res.choices) {
            case 'View All Employees':
                await displayEmployees();
                initialQuestions();
                break;
            case 'Add Employee':
                await addEmployee();
                initialQuestions();
                break;
            case 'Update Employee Role':
                await updateRole();
                initialQuestions();
                break;
            case 'View All Roles':
                await displayRoles();
                initialQuestions();
                break;
            case 'Add Role':
                await addRole();
                initialQuestions();
                break;
            case 'View All Departments':
                await displayDepartments();
                initialQuestions();
                break;
            case 'Add Department':
                await addDepartment();
                initialQuestions();
                break;
            case 'Quit':
                console.log('Goodbye!');
                break;
        }
    }
    )
};

initialQuestions();
/*
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
*/