const { Client } = require('pg');
const client = new Client({
  user: 'pkallas',
  host: 'localhost',
  database: 'todolist',
  port: '5432'
});
client.connect();
const text = 'INSERT INTO tasks(description) VALUES($1)';
const input = [process.argv[3]];

// add(text, input)
const add = () => {client.query(text, input)
  .then(res => {
    lastID
    .then(res => console.log('Added task', (res.rows[0].id + 1)))
    .catch(err => console.log('Added task 1'))
  })
  .catch(err => console.error(err))}

module.exports = add;
