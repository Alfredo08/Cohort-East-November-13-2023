INSERT INTO users(first_name, last_name, age, email)
VALUES ('Alex', 'Miller', 25, 'alex@miller.com');

INSERT INTO users(first_name, last_name, age, email)
VALUES ('Martha', 'Smith', 22, 'martha@smith.com'),
       ('Roger', 'Anderson', 28, 'roger@anderson.com'),
       ('Julie', 'Winston', 21, 'julie@winston.com');

INSERT INTO users(first_name, last_name, age, email)
VALUES ('Alex', 'Winston', 24, 'alex@winston.com');

INSERT INTO todos(description, status, user_id)
VALUES ('Learn Node', 'complete', 1),
       ('Learn Express', 'complete', 1),
       ('Learn HTML', 'complete', 2),
       ('Learn SQL', 'in_progress', 3),
       ('Learn CSS', 'pending', 2),
       ('Learn React', 'pending', 4),
       ('Learn Python', 'cancelled', 5);