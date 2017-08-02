const client = require('./pg');
const text = 'UPDATE tasks SET isComplete=true WHERE id=$1';
const input = [process.argv[3]];

const done = () => {client.query(text, input)
  .then(res => console.log('Task ' + input.join('') + ' is complete'))
  .catch(err => console.log(err))}

module.exports = done
