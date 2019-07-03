DROP DATABASE IF EXISTS raffle;
CREATE DATABASE raffle;

-- USE raffle;

-- CREATE TABLE games (
--     id int NOT NULL AUTO_INCREMENT,
--     name VARCHAR(255) NOT NULL,
--     is_over BOOLEAN DEFAULT 0,
--     PRIMARY KEY (id)
-- );

-- CREATE TABLE users (
--     id int NOT NULL AUTO_INCREMENT,
--     name VARCHAR(255) NOT NULL,
--     avatar VARCHAR(255) NOT NULL,
--     PRIMARY KEY (id)
-- );

-- CREATE TABLE entries (
--     id int NOT NULL AUTO_INCREMENT,
--     game_id int NOT NULL,
--     user_id int NOT NULL,
--     did_win BOOLEAN DEFAULT 0,
--     PRIMARY KEY (id),
--     FOREIGN KEY (game_id) REFERENCES games (id),
--     FOREIGN KEY (user_id) REFERENCES users (id)
-- );
