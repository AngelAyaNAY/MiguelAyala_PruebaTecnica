--CREATE DATABASE "db_postgresql_angel";

CREATE TABLE usuarios (
	id SERIAL PRIMARY KEY,
	nombre VARCHAR(100) NOT NULL,
	correo VARCHAR(100) NOT NULL,
	edad INT NOT NULL
);


INSERT INTO usuarios (nombre, correo, edad)
	VALUES  ('Miguel Ayala', 'angel.aya.pin.00@gmail.com', 25);

SELECT * FROM usuarios;