-- DROP DATABASE IF EXISTS roomease;
-- CREATE DATABASE roomease;

-- \c roomease;

CREATE TABLE apartments (
  id SERIAL PRIMARY KEY,
  apt_name VARCHAR,
  apt_pic VARCHAR,
  karma INTEGER DEFAULT 0
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR NOT NULL, 
  last_name VARCHAR NOT NULL, 
  username VARCHAR UNIQUE NOT NULL,
  gender CHAR(1) CHECK (gender='M' OR gender='F') NOT NULL,
  password_digest VARCHAR NOT NULL,
  email VARCHAR UNIQUE NOT NULL,
  phone VARCHAR UNIQUE NOT NULL,
  profile_pic VARCHAR
);

CREATE TABLE users_apt (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users (id) NOT NULL,
  apt_id INTEGER REFERENCES apartments (id) NOT NULL
);

CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  apt_id INTEGER REFERENCES apartments (id) NOT NULL, 
  title VARCHAR NOT NULL,
  message VARCHAR,
  from_user_id INTEGER REFERENCES users (id) NOT NULL,
  to_user_id INTEGER REFERENCES users (id) NOT NULL,
  due_date DATE NOT NULL,
  karma INTEGER NOT NULL,
  cost INTEGER DEFAULT 0,
  created_timestamp timestamp DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE tasks_completed (
  id SERIAL PRIMARY KEY,
  task_id INTEGER REFERENCES tasks (id) NOT NULL,
  apt_id INTEGER REFERENCES apartments (id) NOT NULL,
  to_user_id INTEGER REFERENCES users (id) NOT NULL,
  karma INTEGER NOT NULL,
  completed_timestamp timestamp DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE tasks_recurring (
  id SERIAL PRIMARY KEY,
  apt_id INTEGER REFERENCES apartments (id) NOT NULL, 
  title VARCHAR NOT NULL,
  message VARCHAR,
  from_user_id INTEGER REFERENCES users (id) NOT NULL,
  to_user_id INTEGER REFERENCES users (id) NOT NULL,
  due_date_type TEXT CHECK(due_date_type='day' OR due_date_type='week' OR due_date_type='month') NOT NULL,
  due_date INTEGER NOT NULL,
  is_recurring BOOLEAN DEFAULT TRUE,
  karma INTEGER NOT NULL,
  cost INTEGER DEFAULT 0,
  created_timestamp timestamp DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE tasks_recurring_completed (
  id SERIAL PRIMARY KEY,
  task_id INTEGER REFERENCES tasks_recurring (id) NOT NULL,
  apt_id INTEGER REFERENCES apartments (id) NOT NULL,
  to_user_id INTEGER REFERENCES users (id) NOT NULL,
  karma INTEGER NOT NULL,
  completed_timestamp timestamp DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE bulletin_notes (
  id SERIAL PRIMARY KEY,
  apt_id INTEGER REFERENCES apartments (id) NOT NULL,
  from_user_id INTEGER REFERENCES users (id) NOT NULL,
  message VARCHAR NOT NULL,
  is_visible BOOLEAN DEFAULT TRUE,
  created_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE goals_apartment (
  id SERIAL PRIMARY KEY,
  apt_id INTEGER REFERENCES apartments (id) NOT NULL,
  from_user_id INTEGER REFERENCES users (id) NOT NULL,
  title VARCHAR NOT NULL,
  message VARCHAR,
  is_recurring BOOLEAN DEFAULT FALSE,
  karma INTEGER NOT NULL,
  created_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE goals_redeemed (
  id SERIAL PRIMARY KEY,
  apt_id INTEGER REFERENCES apartments (id) NOT NULL,
  goal_id INTEGER REFERENCES goals_apartment (id) NOT NULL,
  redeemed_by_id INTEGER REFERENCES users (id) NOT NULL,
  karma INTEGER NOT NULL,
  created_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
