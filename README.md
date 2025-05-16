# Pipeline DevOps: Laravel Notificación Logger & Node Notifications

Este repositorio contiene dos proyectos principales que trabajan juntos para gestionar y registrar notificaciones: un backend en Laravel y un microservicio de notificaciones en Node.js.

---

## Estructura del repositorio

```
laravel-notificacion-logger/   # Backend principal en Laravel
node-notifications/            # Microservicio de notificaciones en Node.js
github/workflows/ci.yml        # Configuración de CI
```

---

## laravel-notificacion-logger

Aplicación principal construida con [Laravel](https://laravel.com/). Se encarga de la gestión de usuarios, lógica de negocio y registro de notificaciones.

### Características

- Framework Laravel 12.x
- Soporte para MongoDB y PostgreSQL
- Integración con microservicio Node.js para envío de notificaciones
- Pruebas unitarias y de integración con PHPUnit

### Instalación

1. Entra al directorio:

   ```sh
   cd laravel-notificacion-logger
   ```

2. Instala dependencias PHP y JS:

   ```sh
   composer install
   npm install
   ```

3. Copia el archivo de entorno y configura variables:

   ```sh
   cp .env.example .env
   # Edita .env según tu configuración local
   ```

4. Genera la clave de la aplicación y ejecuta migraciones:

   ```sh
   php artisan key:generate
   php artisan migrate
   ```

5. Inicia el servidor:

   ```sh
   php artisan serve
   ```

### Pruebas

```sh
php artisan test
```

---

## 🚀 node-notifications

Microservicio construido en [Node.js](https://nodejs.org/) y [Express](https://expressjs.com/) para el envío y registro de notificaciones en PostgreSQL y MongoDB.

### Características

- API REST para recibir y enviar notificaciones
- Conexión a PostgreSQL y MongoDB
- Middleware de logging

### Instalación

1. Entra al directorio:

   ```sh
   cd node-notifications
   ```

2. Instala dependencias:

   ```sh
   npm install
   ```

3. Configura las variables de entorno en `.env`:

   ```
   PORT=3001
   MONGO_URI=mongodb://localhost:27017/tu_db
   # Agrega tus variables de conexión a PostgreSQL
   ```

4. Ejecuta migraciones de base de datos:

   ```sh
   npm run db:migrate
   ```

5. Inicia el microservicio:

   ```sh
   npm run dev
   ```

### Pruebas

```sh
npm test
```

---

## Integración

- El backend de Laravel se comunica con el microservicio Node.js para el envío y registro de notificaciones.
- Ambos servicios deben estar corriendo para el funcionamiento completo del sistema.

---

##  CI/CD

El repositorio incluye un flujo de trabajo de GitHub Actions en [`github/workflows/ci.yml`](github/workflows/ci.yml) para integración continua.

---

## 📄 Licencia

MIT

---

## Contribuciones

¡Las contribuciones son bienvenidas!.
