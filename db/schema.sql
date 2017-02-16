CREATE DATABASE IF NOT EXISTS problems_db;
USE problems_db;

# If the table already exists, remove it before trying to create the table again
DROP TABLE IF EXISTS problems;

# Create the burgers table
CREATE TABLE problems (
id int NOT NULL AUTO_INCREMENT,
name varchar(255) NOT NULL,
date TIMESTAMP,
PRIMARY KEY (id)
);

