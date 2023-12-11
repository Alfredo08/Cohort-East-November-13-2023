SELECT *
FROM users;

SELECT first_name, last_name, age
FROM users;

SELECT first_name AS "First Name", last_name AS "Last Name", age
FROM users;

SELECT *
FROM users
WHERE age >= 25;

SELECT *
FROM users
WHERE age >= 25 AND email = 'alex@miller.com';

SELECT *
FROM users
WHERE email LIKE 'alex%';

SELECT *
FROM todos
LIMIT 3;

SELECT *
FROM todos
LIMIT 3
OFFSET 3;