const done = require('./done');
const add = require('./add');
const list = require('./list');
// const { Client } = require('pg');
// const client = new Client({
//   user: 'pkallas',
//   host: 'localhost',
//   database: 'todolist',
//   port: '5432'
// });

switch(process.argv[2]) {
  case 'done':
    done()
    break;
  case 'add':
    add()
    break;
  case 'list':
    list()
    break;
  default:
    console.log('Please enter a command')
    console.log('Commands are add, list, and done')
}

// client.end();
