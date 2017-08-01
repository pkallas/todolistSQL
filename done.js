const { Client } = require('pg');
const client = new Client({
  user: 'pkallas',
  host: 'localhost',
  database: 'todolist',
  port: '5432'
});
client.connect();
const text = 'UPDATE tasks SET isComplete=true WHERE id=$1';
const input = [process.argv[3]];

const done = () => {client.query(text, input)
  .then(res => console.log('Task ' + input.join('') + ' is complete'))
  .catch(err => console.log(err))}

module.exports = done
