DROP DATABASE IF EXISTS todolist;
CREATE DATABASE todolist;

\c todolist

CREATE TABLE tasks(
  id SERIAL PRIMARY KEY,
  description VARCHAR(155),
  isComplete BOOLEAN DEFAULT false
);
