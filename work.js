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

function displayEmployees(){
    db.query(`SELECT * FROM employees;`, 
            function (err, results) {
            console.log(results);
        })
}

function addEmployee(){
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

function updateRole(){

}

function displayRoles(){

}

function addRole(){

}

function displayDepartments(){

}

function addDepartment(){

}

module.exports = {
    displayEmployees: displayEmployees,
    addEmployee: addEmployee
}

