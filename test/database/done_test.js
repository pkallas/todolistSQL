const expect = require('chai').expect;
const client = require('../../pg');
const doneText = 'UPDATE tasks SET isComplete=true WHERE id=$1';
const doneInput = [1];
const done = () => {client.query(doneText, doneInput)
  .then(res => console.log('Task ' + doneInput.join('') + ' is complete'))
  .catch(err => console.log(err))};

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
const text = 'SELECT * FROM tasks WHERE iscomplete=false'
const list = () => {client.query(text)
  .then(res => console.log(res.rows.map(x => {
    let iscomplete = x.iscomplete
    return `${iscomplete}`
    })))
    .catch(err => console.log(err))};


describe('done', function(){
  beforeEach('remove the data from the db', function(done){
    client.query('TRUNCATE tasks')
    .then(res => {
      console.log('Truncated table tasks')
      done()
    })
    .catch(done)
  });

  beforeEach('add data to the db', function(){
    return add(addText, addInput)
  });

  it("should set an item's isComplete value to true", function(){
    done(doneText, doneInput);
    return list()
    .then(tasks => {
      expect(tasks).to.have.be.deep.eql([ 'true' ])
    })
  })

  after('Should truncate the table', function(done){
    client.query('TRUNCATE tasks')
    .then(res => {
      console.log('Truncated table tasks')
      done()
    })
    .catch(done)
  });
})
