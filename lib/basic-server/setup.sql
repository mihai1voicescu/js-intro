DROP DATABASE IF EXISTS test_me;
CREATE DATABASE test_me;
USE test_me;
CREATE TABLE client
(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(64),
    type ENUM('ADMIN', 'USER')
)

INSERT INTO test_me.client (name, type) VALUES ('gogu', 'ADMIN')
