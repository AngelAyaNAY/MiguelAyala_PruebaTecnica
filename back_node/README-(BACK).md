# 🧠 Backend - Gestión de Usuarios

Este backend forma parte del sistema **Gestión de Usuarios**, una aplicación que permite registrar, listar, actualizar y eliminar usuarios desde una interfaz web (frontend en Angular).  
El backend se encarga de exponer una **API RESTful** que interactúa con la base de datos para realizar las operaciones CRUD de los usuarios.

---

## 🚀 Tecnologías utilizadas

- **Node.js** — Entorno de ejecución del servidor  
- **Express.js** — Framework web para la construcción de la API  
- **PostgreSQL** — Base de datos relacional para el almacenamiento de usuarios  
- **Cors** — Control de acceso entre dominios  
- **Dotenv** — Manejo de variables de entorno  
- **Nodemon** *(opcional)* — Para desarrollo con recarga automática

---

## 🗂️ Estructura del proyecto

backend/
│
├── node_modules/ # Dependencias del proyecto
├── src/
│ ├── config/
│ │ └── db.js # Configuración de conexión a la base de datos
│ ├── controllers/
│ │ └── usersController.js # Lógica de negocio (CRUD)
│ ├── routes/
│ │ └── usersRoutes.js # Definición de rutas de la API
│ ├── models/
│ │ └── usersModel.js # Consultas SQL o estructura de modelo
│ ├── app.js # Configuración principal del servidor Express
│ └── server.js # Punto de entrada del servidor
│
├── .env # Variables de entorno (configuración sensible)
├── .gitignore # Archivos y carpetas ignoradas por Git
├── package.json # Dependencias y scripts del proyecto
└── README.md # Documentación del proyecto


---

## ⚙️ Instalación

Sigue estos pasos para ejecutar el proyecto en tu entorno local:

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/AngelAyaNAY/MiguelAyala_PruebaTecnica.git

2. **Acceder a la carpeta del backend** 
   cd back_node

3. **Instalar dependencias**
   npm install

4. **Configurar las variables de entorno**
   Crea un archivo .env en la raíz del backend con el siguiente contenido (ajustando los valores según tu entorno):
    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=
    DB_NAME=gestion_usuarios
    DB_PORT=3306
    PORT=4000

## 🔗 Endpoints principales

Método	Ruta	Descripción
GET	/api/users	Obtener todos los usuarios
GET	/api/users/:id	Obtener un usuario por ID
POST	/api/users	Registrar un nuevo usuario
PUT	/api/users/:id	Actualizar un usuario existente
DELETE	/api/users/:id	Eliminar un usuario


## 🧠 Ejemplo de respuesta (GET /api/users)
[
  {
    "id": 1,
    "nombre": "Miguel Ayala",
    "correo": "miguel@example.com",
    "rol": "Administrador"
  },
  {
    "id": 2,
    "nombre": "Juan Pérez",
    "correo": "juan@example.com",
    "rol": "Usuario"
  }
]


## 🧪 Conexión con el Frontend
El frontend (Angular) consume los endpoints de este backend mediante solicitudes HTTP.
Para permitir la conexión, asegúrate de tener CORS habilitado en tu configuración (app.js):

const cors = require('cors');
app.use(cors({ origin: 'http://localhost:4200' }));
