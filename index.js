var inquirer = require('inquirer');
cosnt cTable = require('console.table');
const mysql = require('mysql2');

console.table([
    {
        name: 'foo',
        age: 10
    }, {
        name: 'bar',
        age: 20
    }
    
]);

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'test'
});

//inquirer
//.prompt([]);