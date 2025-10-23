# 🎨 Frontend - Gestión de Usuarios

Este frontend forma parte del sistema **Gestión de Usuarios**, una aplicación web desarrollada con **Angular** y **TailwindCSS**.  
Permite registrar, listar, actualizar y eliminar usuarios a través de una interfaz moderna e interactiva, conectada al backend vía API REST.

---

## 🚀 Tecnologías utilizadas

- **Angular** — Framework principal del frontend  
- **TypeScript** — Lenguaje de desarrollo  
- **Tailwind CSS** — Framework de estilos para diseño responsivo  
- **RxJS** — Manejo de programación reactiva  
- **Node.js & npm** — Para la gestión de dependencias y scripts

---

## 🗂️ Estructura del proyecto

```bash
front_angular/
│
├── public/                      # Archivos estáticos (imágenes, íconos, etc.)
├── src/
│   ├── app/
│   │   ├── components/          # Componentes reutilizables
│   │   │   ├── user-list/       # Listado de usuarios
│   │   │   └── user-modal/      # Modal para crear/editar usuarios
│   │   ├── services/            # Servicios (conexión con la API)
│   │   └── app.component.ts     # Componente raíz
│   ├── assets/                  # Recursos estáticos (imágenes, fuentes)
│   ├── styles.css               # Estilos globales
│   ├── main.ts                  # Punto de entrada principal
│   └── index.html               # Plantilla principal del proyecto
│
├── angular.json                 # Configuración general del proyecto Angular
├── package.json                 # Dependencias y scripts del proyecto
├── tailwind.config.js           # Configuración de TailwindCSS
├── tsconfig.json                # Configuración de TypeScript
└── README.md                    # Documentación del proyecto
```

---

## ⚙️ Instalación

Sigue estos pasos para ejecutar el proyecto en tu entorno local:

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/AngelAyaNAY/MiguelAyala_PruebaTecnica.git
   ```

2. **Acceder al directorio del frontend**
   ```bash
   cd front_angular
   ```

3. **Instalar las dependencias**
   ```bash
   npm install
   ```

4. **Ejecutar el servidor de desarrollo**
   ```bash
   npm start
   ```
   El proyecto estará disponible en: [http://localhost:4200](http://localhost:4200)

---

## 🧩 Integración con el Backend

El frontend se conecta a la API del backend mediante peticiones HTTP.  
Asegúrate de que el servidor del backend esté en ejecución antes de iniciar el frontend.

La URL base de la API se puede configurar en el servicio de usuarios (`user.service.ts`), por ejemplo:

```ts
private apiUrl = 'http://localhost:4000/api/users';
```

---

## 🎨 Estilos y fuentes

El proyecto utiliza **TailwindCSS** para los estilos.  
Las fuentes de Google usadas son:

- **Zen Dots**
- **Saira**

Estas se importan en el archivo `src/styles.css` de la siguiente forma:

```css
@import url('https://fonts.googleapis.com/css2?family=Zen+Dots&family=Saira:wght@300;400;600&display=swap');

body {
  font-family: 'Saira', sans-serif;
}
h1, h2, h3 {
  font-family: 'Zen Dots', sans-serif;
}
```

---

## 🧠 Funcionalidades principales

✅ Listar usuarios registrados  
✅ Crear nuevos usuarios desde un modal  
✅ Editar usuarios existentes  
✅ Eliminar usuarios con confirmación  
✅ Diseño responsivo adaptable a dispositivos móviles  

---

## 🧰 Recomendaciones

- No modifiques directamente la carpeta `node_modules`.  
- Usa `ng serve` para desarrollo y `ng build` para producción.  
- Si Tailwind no aplica estilos correctamente, ejecuta:
  ```bash
  npx tailwindcss -i ./src/styles.css -o ./src/output.css --watch
  ```

---
