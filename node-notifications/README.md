# Node Notifications

Microservicio construido en [Node.js](https://nodejs.org/) y [Express](https://expressjs.com/) para el envío de notificaciones y envio de logs al microservicio de laravel-notification-logger.

## Arquitectura
![Arquitectura del sistema](docs/img/arquitectura-devops.png)


## Características

- API REST para enviar notificaciones
- Conexión a PostgreSQL y MongoDB

## Instalación

1. Entra al directorio del proyecto:

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

## Pruebas

```sh
npm test
```

## Integración

Este microservicio recibe solicitudes del backend Laravel para el envío y registro de notificaciones.