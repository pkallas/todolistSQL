const client = require('./pg');
const text = 'INSERT INTO tasks(description) VALUES($1)';
const input = [process.argv[3]];
const lastID = 'SELECT id FROM tasks ORDER BY id DESC LIMIT 1';

// add(text, input)
const add = () => {client.query(text, input)
  .then(res => {
    client.query(lastID)
    .then(res => console.log("Added task " + res.rows[0].id))
    .catch(err => console.log("Couldn't find last id"))
  })
  .catch(err => console.error(err))};

module.exports = add;
