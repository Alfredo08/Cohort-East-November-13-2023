SELECT *
FROM todos JOIN users
    ON users.id = todos.user_id
WHERE users.id = 1;


SELECT *
FROM todos JOIN users
    ON users.id = todos.user_id
ORDER BY users.email;

SELECT *
FROM todos JOIN users
    ON users.id = todos.user_id
ORDER BY todos.id DESC;

SELECT users.email, COUNT(users.email)
FROM todos t JOIN users u
    ON users.id = todos.user_id
GROUP BY users.email
ORDER BY todos.email DESC;

-- Aliases
SELECT u.email, COUNT(u.email)
FROM todos t JOIN users u
    ON u.id = t.user_id
GROUP BY u.email
ORDER BY u.email DESC;
