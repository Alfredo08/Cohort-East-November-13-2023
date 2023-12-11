
CREATE TABLE users(
    id SERIAL PRIMARY KEY, -- Setting the primary key to auto increment
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    age INT NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE todos(
    id SERIAL PRIMARY KEY,
    description VARCHAR(200),
    status VARCHAR(15),
    user_id INT,
    FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
);

DROP TABLE name_of_table;

-- ALTER TABLE 