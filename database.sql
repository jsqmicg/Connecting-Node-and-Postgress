CREATE DATABASE library;
--\c library "use a database"
--\l "see all databases"
--\dt "see all tables"
CREATE TABLE books(
    section int,
    title text,
    author text
);

--insert one
INSERT INTO books (section, title, author)
VALUES(1, '1984', 'George Orwell');

--insert many
INSERT INTO books (section, title, author)
VALUES (2, 'Cien Años de Soledad', 'Gabriel García Márquez'),(3, 'La Divina Comedia', 'Dante Alighieri');

select * from books;

CREATE TABLE Users(
    username text,
    password text
);

-- insert values into users table
insert into users
values ('perroflautadel94', 'underpressure94'),('basstian94','underpressure94*'),('juanpachanga', 'Underpressure94*');

-- client class : create a client connection, only one.
-- pool class: create multiple clients connection, many.
-- query class : allows to make querys.
