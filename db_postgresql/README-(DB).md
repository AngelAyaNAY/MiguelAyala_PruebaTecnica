# 🗄️ Base de Datos - Gestión de Usuarios (PostgreSQL)

Este script SQL define la base de datos y la tabla principal del sistema **Gestión de Usuarios**, junto con algunos registros iniciales para pruebas.  
La base de datos fue creada y configurada utilizando **PostgreSQL** mediante **pgAdmin 4** y el **psql Shell**.

---

## 🚀 Requisitos previos

Antes de ejecutar el script asegúrate de tener instalado:

- **PostgreSQL** (versión recomendada: 14 o superior)  
- **pgAdmin 4** *(opcional, para gestión visual)*  
- **psql (PostgreSQL Shell)** *(para ejecutar comandos manualmente)*

---

## 🧩 Estructura del script

El archivo SQL contiene los siguientes comandos:

```sql
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
```

---

## ⚙️ Pasos para crear y ejecutar la base de datos

### 🧠 Opción 1: Usando pgAdmin 4 (interfaz gráfica)

1. Abre **pgAdmin 4** e inicia sesión.  
2. En el panel izquierdo, haz clic derecho sobre **Databases → Create → Database...**  
3. Asigna el nombre `db_postgresql_angel` y guarda.  
4. Abre el **Query Tool** (`Tools > Query Tool`).  
5. Copia y pega el contenido del script SQL.  
6. Ejecuta el script con el botón ▶️ (Run).  
7. Verifica la tabla ejecutando:  
   ```sql
   SELECT * FROM usuarios;
   ```

---

### 💻 Opción 2: Usando PostgreSQL Shell (psql)

1. Abre el **psql Shell** (PostgreSQL Command Line).  
2. Conéctate como usuario administrador (por ejemplo `postgres`).  
3. Crea la base de datos:  
   ```sql
   CREATE DATABASE db_postgresql_angel;
   ```
4. Conéctate a la base de datos creada:  
   ```bash
   \c db_postgresql_angel
   ```
5. Crea la tabla y los registros copiando el bloque SQL del script.  
6. Verifica la inserción:  
   ```sql
   SELECT * FROM usuarios;
   ```

---

## 🧾 Resultado esperado

Al ejecutar correctamente el script, obtendrás una tabla `usuarios` con datos de ejemplo como estos:

| ID | Nombre | Correo | Edad |
|:--:|:--------|:-------------------------------|:----:|
| 1 | Miguel Ayala | angel.aya.pin.00@gmail.com | 25 |
| 2 | Laura Ramírez | laura.ramirez23@gmail.com | 28 |
| 3 | Andrés Torres | andres.torres.dev@gmail.com | 31 |
| ... | ... | ... | ... |

---

## 🧰 Recomendaciones

- Asegúrate de que el servidor de PostgreSQL esté iniciado antes de ejecutar el script.  
- Si usas una contraseña personalizada para `postgres`, agrégala cuando psql la solicite.  
- Puedes exportar los datos desde pgAdmin o usarlos directamente con tu backend Node.js.  
- No uses comillas en el nombre de la base de datos si no es necesario.  

---

## 📦 Archivo recomendado

Guarda el script como:

```
database/
└── script_postgresql.sql
```

Y ejecútalo con **pgAdmin 4** o **psql** según tu preferencia.
