// Require expect and pg client, then set up and connect to the client db
const expect = require('chai').expect;
process.env.NODE_ENV = 'test';
const client = require('../../pg');

// Require add for the tests; have to copy and paste from add file, as the original
// add function takes user input into bash as the input to insert into the db
const addText = 'INSERT INTO tasks(description) VALUES($1)';
const addInput = ['Buy coffee']
const lastID = 'SELECT id FROM tasks ORDER BY id DESC 1';
const add = () => {client.query(addText, addInput)
  .then(res => {
    client.query(lastID)
    .then(res => console.log("Added task", (res.rows[0].id + 1)))
    .catch(err => console.log("Added task 1"))
  })
  .catch(err => console.error(err))};

// Require list to check that add added data to db
const list = require('../../list');

// Add list in manually rather than requiring it
// const text = 'SELECT * FROM tasks WHERE isComplete=false'
// const list = () => {client.query(text)
//   .then(res => console.log(res.rows.map(x => {
//     let desc = x.description;
//     let ids = x.id;
//     return `${ids}  ${desc}`
//     // return [desc, ids].join(' ')
//   })))
//   .catch(err => console.log(err))};

//Tests actually start here

describe('add', function() {

  beforeEach('add data to the db', function(){
    console.log('This is happening before each test, allowing list function to check that add worked')
    return add(addText, addInput)
  });

  it('Should add a task to the db', function(done){
    // console.log('First result of list: ', list())
    // expect(list()).to.have.lengthOf(1)
    list()
    .then(tasks => {
      expect(tasks).to.have.lengthOf(1)
      done()
    })
    .catch(done)
  })

  it('Should add a task to the db', function(){
    // console.log('First result of list: ', list())
    // expect(list()).to.have.lengthOf(1)
    return list()
    .then(tasks => {
      expect(tasks).to.have.lengthOf(1)
    })
  })

  it("Should add 'Buy coffee' to the db", function(){
    return list()
    .then(tasks => {
      expect(tasks).to.deep.eql([ '1  Buy coffee' ])
    })
  })

  afterEach('remove the data from the db', function(done){
    console.log('This is happening after each test, truncating the table')
    client.query('TRUNCATE tasks')
    .then(res => {
      console.log('Truncated table tasks')
      done()
    })
    .catch(done)
  });

})
