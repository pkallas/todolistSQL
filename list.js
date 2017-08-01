
const { Client } = require('pg');
const client = new Client({
  user: 'pkallas',
  host: 'localhost',
  database: 'todolist',
  port: '5432'
});
client.connect();
const text = 'SELECT * FROM tasks WHERE isComplete=false'


const list = () => {client.query(text)
  .then(res => console.log(res.rows.map(x => {
    let desc = x.description;
    let ids = x.id;
    return `${ids}  ${desc}`
    // return [desc, ids].join(' ')
  })))
  .catch(err => console.log(err))};


module.exports = list;
