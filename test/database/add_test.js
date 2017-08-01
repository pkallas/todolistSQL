const expect = require('chai').expect;
const { Client } = require('pg');
const client = new Client({
  user: 'pkallas',
  host: 'localhost',
  database: 'todolist-test',
  port: '5432'
});
client.connect();
const addText = 'INSERT INTO tasks(description) VALUES($1)';
const lastID = 'SELECT id FROM tasks ORDER BY id DESC 1';
const add = () => {client.query(text, input)
  .then(res => {
    client.query(lastID)
    .then(res => console.log("Added task", (res.rows[0].id + 1)))
    .catch(err => console.log("Added task 1"))
  })
  .catch(err => console.error(err))};
const doneText = 'DELETE FROM tasks WHERE id=1';
const done = () => {client.query(text, input)
  .then(res => console.log('Task ' + input.join('') + ' is complete'))
  .catch(err => console.log(err))};
const list = require('../../list');

describe('add', function() {

  beforeEach('add data to the db', function(){
    add(addText, 'Buy coffee')
  })

  afterEach('remove the data from the db', function(){
    done(doneText, 1)
  })

  it('Should add a task to the db', function(){
    expect(res.rows).to.eventually.have.lengthOf(1)
  })

  it("Should add 'Buy coffee' to the db", function(){
    expect(list()).to.deep.eql([ '1  Buy coffee' ])
  })
})
