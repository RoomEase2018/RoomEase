\c roomease_test;

INSERT INTO users (first_name, last_name, username, gender, password_digest, email, phone) VALUES ('Eric', 'Liu', 'a', 'M', '$2a$10$q8//j/bkolUGfnNCMl66ge0xTOZiYTX4PQiAkVnwY4A6tk1WXdEVa', 'ericliu@ac.c4q.nyc', '123456789');

INSERT INTO users (first_name, last_name, username, gender, password_digest, email, phone) VALUES ('Ryan', 'Omoruyi', 'ryry', 'M', '$2a$10$q8//j/bkolUGfnNCMl66ge0xTOZiYTX4PQiAkVnwY4A6tk1WXdEVa', 'ryanomoruyi@ac.c4q.nyc', '987654321');

INSERT INTO users (first_name, last_name, username, gender, password_digest, email, phone) VALUES ('Ruben', 'Profit', 'benjy', 'M', '$2a$10$q8//j/bkolUGfnNCMl66ge0xTOZiYTX4PQiAkVnwY4A6tk1WXdEVa', 'rubenprofit@ac.c4q.nyc', '83727284745');

INSERT INTO users (first_name, last_name, username, gender, password_digest, email, phone) VALUES ('Aiden', 'Shih', 'Aiden', 'M', '$2a$10$q8//j/bkolUGfnNCMl66ge0xTOZiYTX4PQiAkVnwY4A6tk1WXdEVa', 'AidenShih@ac.c4q.nyc', '2342342333');

INSERT INTO apartments (apt_name, apt_pic) VALUES ('Koala Bears', 'https://2.bp.blogspot.com/-QHTjF9WaUg0/TaItgXzcO6I/AAAAAAAAHAI/b5i1WQCM0sU/s1600/koala-wallpaper3.jpg');

INSERT INTO users_apt (user_id, apt_id) VALUES (1, 1);

INSERT INTO users_apt (user_id, apt_id) VALUES (2, 1);

INSERT INTO users_apt (user_id, apt_id) VALUES (3, 1);

INSERT INTO users_apt (user_id, apt_id) VALUES (4, 1);

-- INSERTING OLD TASKS + COMPLETED
-- ################################################

INSERT INTO tasks (apt_id, title, posted_by_id, assigned_to_id, due_date, message, karma_value) VALUES (1, 'clean gutter', 1, 2, '2018/03/21', '', 25);

INSERT INTO tasks (apt_id, title, posted_by_id, assigned_to_id, due_date, message, karma_value) VALUES (1, 'buy tp', 3, 1, '2018/03/22', '', 10);

INSERT INTO tasks (apt_id, title, posted_by_id, assigned_to_id, due_date, message, karma_value) VALUES (1, 'clear out basement', 3, 1, '2018/03/23', 'need space for party!', 20);

INSERT INTO tasks (apt_id, title, posted_by_id, assigned_to_id, due_date, message, karma_value) VALUES (1, 'clean microwave', 3, 1, '2018/03/25', '', 10);

INSERT INTO tasks_completed (task_id, apt_id, completed_by_id, karma) VALUES (1, 1, 2, 25);

INSERT INTO tasks_completed (task_id, apt_id, completed_by_id, karma) VALUES (2, 1, 1, 10);

INSERT INTO tasks_completed (task_id, apt_id, completed_by_id, karma) VALUES (3, 1, 1, 20);

INSERT INTO tasks_completed (task_id, apt_id, completed_by_id, karma) VALUES (4, 1, 1, 10);

-- INSERTING FUTURE TASKS
-- ################################################

INSERT INTO tasks (apt_id, title, posted_by_id, assigned_to_id, due_date, message, karma_value) VALUES (1, 'buy beer', 1, 2, '2018/04/09', 'get some IPAs for Rob', 10);

INSERT INTO tasks (apt_id, title, posted_by_id, assigned_to_id, due_date, message, karma_value) VALUES (1, 'rake leaves', 3, 1, '2018/04/11', 'rake is in the basement', 10);

INSERT INTO tasks (apt_id, title, posted_by_id, assigned_to_id, due_date, message, karma_value) VALUES (1, 'buy dish soap', 4, 1, '2018/04/12', 'almost out of dish soap', 10);

INSERT INTO tasks (apt_id, title, posted_by_id, assigned_to_id, due_date, message, karma_value) VALUES (1, 'clean bathroom', 1, 3, '2018/04/15', 'remember to clean the tub!', 50);

-- INSERTING RECURRING TASKS + COMPLETED
-- ################################################

INSERT INTO tasks_recurring (apt_id, title, posted_by_id, assigned_to_id, due_date_type, due_date, message, karma_value) VALUES (1, 'buy milk', 3, 1, 'week' , 3, 'buy whole milk', 10);

INSERT INTO tasks_recurring (apt_id, title, posted_by_id, assigned_to_id, due_date_type, due_date, message, karma_value) VALUES (1, 'clean bathroom', 2, 1, 'week', 7 , 'buy whole milk', 10);

INSERT INTO tasks_recurring_completed (task_id, apt_id, completed_by_id, karma) VALUES (1, 1, 1, 10);

INSERT INTO tasks_recurring_completed (task_id, apt_id, completed_by_id, karma) VALUES (2, 1, 1, 10);

-- INSERTING EXPENSES + PAYMENTS
-- ################################################

INSERT INTO expenses (apt_id, title, message, amount, payer_id, payee_id, due_date, karma_value) VALUES (1, 'for milk', '', 1.50, 1, 2, DATE '2018/03/14', 10);

INSERT INTO expenses (apt_id, title, message, amount, payer_id, payee_id, due_date, karma_value) VALUES (1, 'for tp', 'got the fancy tp :)', 4, 1, 2, DATE '2018/04/10', 10);

INSERT INTO expenses (apt_id, title, message, amount, payer_id, payee_id, due_date, karma_value) VALUES (1, 'BUBBLE GUM', 'BOUGHT IN BULK', 20, 1, 4, DATE '2018/04/13', 10);

INSERT INTO expenses (apt_id, title, message, amount, payer_id, payee_id, due_date, karma_value) VALUES (1, 'groceries', 'boughgt a bunch of brocolli', 14, 1, 3, DATE '2018/04/15', 10);

INSERT INTO payments_expenses (amount, apt_id, payer_id, payee_id, expense_id, message, karma) VALUES (1.50, 1, 1, 2, 1, '', 10);

INSERT INTO payments_expenses (amount, apt_id, payer_id, payee_id, expense_id, message, karma) VALUES (4, 1, 1, 2, 2, '', 10);

-- INSERTING RECURRING EXPENSES + PAYMENTS
-- ################################################

INSERT INTO expenses_recurring (apt_id, title, message, amount, payer_id, payee_id, due_date_type, due_date, karma_value) VALUES (1, 'rent', '', 650, 1, 2, 'month', 31, 10);

INSERT INTO expenses_recurring (apt_id, title, message, amount, payer_id, payee_id, due_date_type, due_date, karma_value) VALUES (1, 'utilities', '', 650, 1, 2, 'month', 31, 10);

INSERT INTO payments_recurring_expenses (amount, apt_id, payer_id, payee_id, expense_id, message, karma) VALUES (650, 1, 1, 2, 1, 'gotta pay rent', 10);

INSERT INTO payments_recurring_expenses (amount, apt_id, payer_id, payee_id, expense_id, message, karma) VALUES (650, 1, 1, 2, 2, 'gotta pay utilities', 10);


-- INSERTING BULLETIN NOTES
-- ################################################

INSERT INTO bulletin_notes (apt_id, posted_by, note) VALUES (1, 1, 'my family is coming in over the weekend!');

INSERT INTO bulletin_notes (apt_id, posted_by, note) VALUES (1, 2, 'i really like cheese');

INSERT INTO bulletin_notes (apt_id, posted_by, note) VALUES (1, 3, 'There is lasagna in the fridge.  Help yourself!');

INSERT INTO bulletin_notes (apt_id, posted_by, note) VALUES (1, 4, 'who wants to go out tonight??');

-- CREATING APARTMENT GOALS
-- ################################################

INSERT INTO goals_apartment (apt_id, posted_by, title, note, karma_cost) VALUES (1, 3, 'PARTAYY', 'drinks on Ruben', 100);

INSERT INTO goals_apartment (apt_id, posted_by, title, note, karma_cost) VALUES (1, 2, 'brunch' , '', 50);

