const expect = require('chai').expect;
const { Client } = require('pg');
const client = new Client({
  user: 'pkallas',
  host: 'localhost',
  database: 'todolist-test',
  port: '5432'
});
client.connect();
