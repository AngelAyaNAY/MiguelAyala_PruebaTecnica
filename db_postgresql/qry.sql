--CREATE DATABASE "db_postgresql_angel";

CREATE TABLE usuarios (
	id SERIAL PRIMARY KEY,
	nombre VARCHAR(100) NOT NULL,
	correo VARCHAR(100) NOT NULL,
	edad INT NOT NULL
);


INSERT INTO usuarios (nombre, correo, edad)
	VALUES  ('Miguel Ayala', 'angel.aya.pin.00@gmail.com', 25);

INSERT INTO usuarios (nombre, correo, edad)
	VALUES  ('Laura Ramírez', 'laura.ramirez23@gmail.com', 28),
	  		('Andrés Torres', 'andres.torres.dev@gmail.com', 31),
	  		('Camila Rojas', 'camila.rojas.art@gmail.com', 24),
	  		('Juan Esteban', 'juanesteban.codes@gmail.com', 27),
	  		('Valentina Gómez', 'valentina.gomez01@gmail.com', 22),
	  		('David Hernández', 'davidhdez92@gmail.com', 33),
	  		('Sara Castillo', 'saracastillo.design@gmail.com', 26),
	  		('Carlos Méndez', 'carlos.mendez.tech@gmail.com', 29),
	  		('Natalia López', 'natalia.lopez.photo@gmail.com', 30);


SELECT * FROM usuarios;