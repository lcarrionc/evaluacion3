# Backend – API REST (Node.js + Express + PostgreSQL)

Este proyecto es una API RESTful creada con Node.js, Express, Sequelize y PostgreSQL, diseñada para gestionar productos de forma simple y escalable.
Incluye conexión a base de datos, rutas CRUD y está listo para desplegar en Render.

## Tecnologías

* Node.js
* Express
* PostgreSQL
* Sequelize ORM
* Dotenv
* Cors
* Nodemon (dev)

---

## Variables de entorno

Configurar en un archivo `.env`:

* DB_HOST=HOST
* DB_USER=USER
* DB_PASSWORD=PASSWORD
* DB_NAME=DB_NAME
* DB_PORT=5432
* NODE_ENV=development
* PORT=3001

---

## 📦 Instalación

1. Clonar repositorio
2. Instalar dependencias → `npm install`
3. Crear base de datos en PostgreSQL
4. Configurar archivo `.env`

---

## 🗄️ Base de Datos

Crear BD:

CREATE DATABASE name;

Sequelize gestiona automáticamente las tablas según los modelos.

---

## ▶️ Ejecución

Modo desarrollo:
npm run dev

Modo producción:
npm start

---

## 🌐 Endpoints

* GET /products → lista productos
* GET /products/:id → producto por ID
* POST /products → crear producto
* PUT /products/:id → actualizar producto
* DELETE /products/:id → eliminar producto

---

## 🔗 Despliegue en Render

Start Command:
node src/index.js

Recordar:

* Configurar variables de entorno
* Render asigna automáticamente el puerto → usar process.env.PORT

---

## 🧪 Pruebas

Puedes usar Postman / Thunder Client
Ejemplo:
* GET [https://tu-api.onrender.com/products](https://tu-api.onrender.com/products)

---

## 🔧 Problemas comunes

Error: ECONNRESET
→ Credenciales inválidas
→ DB dormida en Render
→ Faltan opciones SSL

Solución sugerida en Sequelize:
dialectOptions → ssl require + rejectUnauthorized false

---

## 📄 Licencia

MIT

---

## 👨‍💻 Autor

Luis Carrión

---

