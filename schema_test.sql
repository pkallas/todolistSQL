DROP DATABASE IF EXISTS todolist_test;
CREATE DATABASE todolist_test;

\c todolist_test

CREATE TABLE tasks(
  id SERIAL PRIMARY KEY,
  description VARCHAR(155),
  isComplete BOOLEAN DEFAULT false
);
