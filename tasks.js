const done = require('./done');
const add = require('./add');
const list = require('./list');

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
// process.exit()
