DROP DATABASE IF EXISTS roomease;
CREATE DATABASE roomease;

\c roomease;

CREATE TABLE apartments (
  id SERIAL PRIMARY KEY,
  apt_name VARCHAR,
  apt_pic VARCHAR,
  bulletin_id INTEGER REFERENCES bulletin_board (id) NOT NULL
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  -- apartment_id SERIAL REFERENCES apartments,
  first_name VARCHAR NOT NULL, 
  last_name VARCHAR NOT NULL, 
  username VARCHAR UNIQUE NOT NULL,
  gender CHAR(1) CHECK (gender='M' OR gender='F') NOT NULL,
  password_digest VARCHAR NOT NULL,
  karma INTEGER DEFAULT 0,
  email VARCHAR UNIQUE NOT NULL,
  phone VARCHAR UNIQUE NOT NULL,
  profile_pic VARCHAR
);

CREATE TABLE users_apt (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users (id) NOT NULL,
  apt_id INTEGER REFERENCES apartments (id) NOT NULL,
);

CREATE TABLE chores (
  id SERIAL PRIMARY KEY,
  apt_id INTEGER REFERENCES apartments (id) NOT NULL, 
  chore_name VARCHAR NOT NULL,
  posted_by_id INTEGER REFERENCES users (id) NOT NULL,
  assigned_to_id INTEGER REFERENCES users (id) NOT NULL,
  completed BOOLEAN DEFAULT FALSE,
  due_date DATE NOT NULL,
  due_time TIME,
  message VARCHAR,
  created_timestamp timestamp DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE expenses (
  id SERIAL PRIMARY KEY,
  apt_id INTEGER REFERENCES apartments (id) NOT NULL,
  expense_name VARCHAR NOT NULL,
  amount INTEGER NOT NULL,
  payer_id INTEGER REFERENCES users (id),
  payee_id INTEGER REFERENCES users (id),
  due_date DATE NOT NULL,
  due_time TIME,
  is_recurring BOOLEAN DEFAULT FALSE,
  message VARCHAR,
  created_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE payments (
  id SERIAL PRIMARY KEY,
  amount INTEGER NOT NULL,
  apt_id INTEGER REFERENCES apartments (id) NOT NULL,
  payer_id INTEGER REFERENCES users (id) NOT NULL,
  payee_id INTEGER REFERENCES users (id) NOT NULL,
  expense_id INTEGER REFERENCES expenses (id) NOT NULL,
  message VARCHAR,
  created_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE bulletin_notes (
  id SERIAL PRIMARY KEY,
  apt_id INTEGER REFERENCES apartments (id) NOT NULL,
  posted_by INTEGER REFERENCES users (id) NOT NULL,
  note VARCHAR NOT NULL,
  is_visible BOOLEAN DEFAULT TRUE,
  created_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- INSERT INTO apartments (nick_name, banner_pic)
--   VALUES ('Crash Pad', 'http://homemydesign.com/wp-content/uploads/2015/12/urban-bachelor-pad-living-room-decor.jpg');

-- INSERT INTO users (apartment_id, full_name, username, gender, password_digest, karma, email, phone, profile_pic)
--   VALUES (1, 'Lizzie McGuire', 'LizBiz', 'F', '$2a$10$brAZfSmByFeZmPZ/MH5zne9YDhugjW9CtsBGgXqGfix0g1tcooZWq', 0, 'lizbiz@email.com', '12345678', 'http://images2.fanpop.com/image/photos/11200000/Lizzie-in-Movin-On-Up-episode-lizzie-mcguire-11212776-768-576.jpg'), 
--   (1, 'David Gordon', 'Gordo', 'M', '$2a$10$brAZfSmByFeZmPZ/MH5zne9YDhugjW9CtsBGgXqGfix0g1tcooZWq', 0, 'gordo@email.com', '23456789', 'http://www.lizziemcguirereviewed.com/wp-content/uploads/2016/03/stay-off-the-dwarf-kids-lizzie-mcguire-reviewed.png');
-- INSERT INTO chores (apartment_id, chore_name, posted_by_id, completed, expected_completed_date, expected_completed_time)
--   VALUES (1, 'do dishes', 2, FALSE, '03/30/2018', '09:00PM'),
--   (1, 'sweep living room', 1, FALSE, '03/23/2018', '04:00PM');
-- INSERT INTO fixed_expenses (apartment_id, expense_name, amount, end_of_month, due_date)
--   VALUES (1, 'rent', 1850, TRUE, null),
--   (1, 'electricity', 175, FALSE, '04/1/2018'),
--   (1, 'water', 125, FALSE, '04/1/2018'),
--   (1, 'gas', 150, FALSE, '04/1/2018');
-- INSERT INTO expenses (apartment_id, expense_name, amount, payee_id, due_date)
--   VALUES (1, 'toilet paper', 5, 2, '03/28/2018'),
--   (1, 'groceries', 80, 1, '03/24/2018'),
--   (1, 'counch pillows', 110, 1, '03/24/2018');
-- INSERT INTO notes (apartment_id, note, posted_by)
--   VALUES (1, 'PAAAAAAAARRTTTTYYY THIS FRIDAY', 1);