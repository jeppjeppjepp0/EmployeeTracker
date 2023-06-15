const inquirer = require('inquirer');
const mysql = require('mysql2');

const db = mysql.createConnection(
    {
      host: "localhost",
      user: "root",
      password: "asdfghjkl;\'",
      database: "company_db",
    },
    console.log(`Connected to the company_db database.`)
);

async function displayEmployees(){
    db.query(`SELECT * FROM employees;`, 
            function (err, results) {
            console.log(results);
        })
}

async function addEmployee(){
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the first name of the employee?',
            name: 'first',
            validate: function (input) { 
                return input.length > 0
            }
        },
        {
            type: 'input',
            message: 'What is the last name of the employee?',
            name: 'last',
            validate: function (input) { 
                return input.length > 0
            }
        },
        {
            type: 'input',
            message: 'What is the id of the role of this person?',
            name: 'roleID',
            validate: function (input) { 
                return input.length > 0
            }
        },
        {
            type: 'input',
            message: 'What is the employee id of the manager of this person?',
            name: 'managerID',
            validate: function (input) { 
                return input.length > 0
            }
        },
    ])
    .then((res) => {
        db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (${res.first}, ${res.last}, ${res.roleID}, ${res.managerID});`, 
            function (err, results) {
            console.log(results);
        })
    })
}

async function updateRole(){
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the id of the employee you would like to update?',
            name: 'id',
            validate: function (input) {
                return input.length > 0
            }
        },
        {
            type: 'input',
            message: 'What is the id of the role you would like to update this employee to?',
            name: 'roleID',
            validate: function (input) {
                return input.length > 0
            }
        },
    ])
    .then((res) => {
        db.query(`UPDATE employee SET role_id = ${res.roleID} WHERE id = ${res.id};`,
            function (err, results) {   
            console.log(results);
        })
    })
}

async function displayRoles(){
    db.query(`SELECT * FROM roles;`,
        function (err, results) {
            console.log(results);
        })
}

async function addRole(){
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of the role?',
            name: 'title',
            validate: function (input) {
                return input.length > 0
            }
        },
        {
            type: 'input',
            message: 'What is the salary of the role?',
            name: 'salary',
            validate: function (input) {
                return input.length > 0
            }
        },
        {
            type: 'input',
            message: 'What is the department id of the role?',
            name: 'departmentID',
            validate: function (input) {
                return input.length > 0
            }
        },
    ])
    .then((res) => {
        db.query(`INSERT INTO roles (title, salary, department_id) VALUES (${res.title}, ${res.salary}, ${res.departmentID});`,
            function (err, results) {
            console.log(results);
        })
    })
}

async function displayDepartments(){
    db.query(`SELECT * FROM departments;`,
        function (err, results) {
            console.log(results);
        })
}

async function addDepartment(){
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the name of the department?',
            name: 'name',
            validate: function (input) {
                return input.length > 0
            }
        },
    ])
    .then((res) => {
        db.query(`INSERT INTO departments (name) VALUES (${res.name});`,
            function (err, results) {
            console.log(results);
        })
    })
}

module.exports = {
    displayEmployees: displayEmployees,
    addEmployee: addEmployee,
    updateRole: updateRole,
    displayRoles: displayRoles,
    addRole: addRole,
    displayDepartments: displayDepartments,
    addDepartment: addDepartment
}

