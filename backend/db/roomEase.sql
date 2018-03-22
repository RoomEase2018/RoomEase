DROP DATABASE IF EXISTS roomease;
CREATE DATABASE roomease;

\c roomease;

CREATE TABLE apartments (
  ID SERIAL PRIMARY KEY,
  nick_name VARCHAR UNIQUE NOT NULL,
  banner_pic VARCHAR NOT NULL
);

INSERT INTO apartments (nick_name, banner_pic)
  VALUES ('Crash Pad', 'http://homemydesign.com/wp-content/uploads/2015/12/urban-bachelor-pad-living-room-decor.jpg');

CREATE TABLE users (
  ID SERIAL PRIMARY KEY,
  apartment_id INTEGER REFERENCES apartments,
  full_name VARCHAR, 
  username VARCHAR UNIQUE NOT NULL,
  gender BOOLEAN,
  password_digest VARCHAR NOT NULL,
  karma INTEGER,
  email VARCHAR UNIQUE NOT NULL,
  phone VARCHAR NOT NULL,
  profile_pic VARCHAR
);

INSERT INTO users (apartment_id, full_name, username, gender, password_digest, karma, email, phone, profile_pic)
  VALUES (1, 'Lizzie McGuire', 'LizBiz', FALSE, '$2a$10$brAZfSmByFeZmPZ/MH5zne9YDhugjW9CtsBGgXqGfix0g1tcooZWq', 0, 'lizbiz@email.com', '12345678', 'http://images2.fanpop.com/image/photos/11200000/Lizzie-in-Movin-On-Up-episode-lizzie-mcguire-11212776-768-576.jpg'), 
  (1, 'David Gordon', 'Gordo', TRUE, '$2a$10$brAZfSmByFeZmPZ/MH5zne9YDhugjW9CtsBGgXqGfix0g1tcooZWq', 0, 'gordo@email.com', '23456789', 'http://www.lizziemcguirereviewed.com/wp-content/uploads/2016/03/stay-off-the-dwarf-kids-lizzie-mcguire-reviewed.png');

CREATE TABLE chores (
  ID SERIAL PRIMARY KEY,
  apartment_id INTEGER REFERENCES apartments, 
  chore_name VARCHAR,
  posted_by_id INTEGER REFERENCES users,
  completed BOOLEAN,
  chore_timestamp timestamp not null default CURRENT_TIMESTAMP,
  expected_completed_date VARCHAR,
  expected_completed_time VARCHAR
);

INSERT INTO chores (apartment_id, chore_name, posted_by_id, completed, expected_completed_date, expected_completed_time)
  VALUES (1, 'do dishes', 2, FALSE, '03/30/2018', '09:00PM'),
  (1, 'sweep living room', 1, FALSE, '03/23/2018', '04:00PM');

CREATE TABLE fixed_expenses (
  ID SERIAL PRIMARY KEY,
  apartment_id INTEGER REFERENCES apartments, 
  expense_name VARCHAR,
  amount INTEGER,
  end_of_month BOOLEAN,
  due_date VARCHAR,
  expense_timestamp timestamp not null default CURRENT_TIMESTAMP
);

INSERT INTO fixed_expenses (apartment_id, expense_name, amount, end_of_month, due_date)
  VALUES (1, 'rent', 1850, TRUE, null),
  (1, 'electricity', 175, FALSE, '04/1/2018'),
  (1, 'water', 125, FALSE, '04/1/2018'),
  (1, 'gas', 150, FALSE, '04/1/2018');

CREATE TABLE expenses (
  ID SERIAL PRIMARY KEY,
  apartment_id INTEGER REFERENCES apartments, 
  expense_name VARCHAR,
  amount INTEGER,
  payee_id INTEGER REFERENCES users,
  due_date VARCHAR,
  expense_timestamp timestamp not null default CURRENT_TIMESTAMP
);

INSERT INTO expenses (apartment_id, expense_name, amount, payee_id, due_date)
  VALUES (1, 'toilet paper', 5, 2, '03/28/2018'),
  (1, 'groceries', 80, 1, '03/24/2018'),
  (1, 'counch pillows', 110, 1, '03/24/2018');

CREATE TABLE payments (
  ID SERIAL PRIMARY KEY,
  amount INTEGER,
  payer_id INTEGER REFERENCES users,
  expense_id INTEGER REFERENCES expenses,
  fixed_expense_id INTEGER REFERENCES fixed_expenses
);

CREATE TABLE notes (
  ID SERIAL PRIMARY KEY,
  apartment_id INTEGER REFERENCES apartments,
  note VARCHAR,
  posted_by SERIAL REFERENCES users
);

INSERT INTO notes (apartment_id, note, posted_by)
  VALUES (1, 'PAAAAAAAARRTTTTYYY THIS FRIDAY', 1);