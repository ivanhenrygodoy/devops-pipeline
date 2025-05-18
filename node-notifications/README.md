# 📧 Node Notifications

Microservicio construido en [Node.js](https://nodejs.org/) y [Express](https://expressjs.com/) para el envío de notificaciones vía correo electrónico y logs al microservicio de laravel-notification-logger via axios.

## 🚀 Características

- 📧 API REST para enviar notificaciones
- 🔄 Conexión a PostgreSQL y MongoDB
- 🔐 Sistema completo de pruebas unitarias
- 📦 Integración con Laravel Notificación Logger


## 📁 Estructura de carpetas

```
node-notifications/

├── bd/                          # Configuraciones individuales con bases de datos para funcionamiento con ORM
├── config/                      # Configuraciones de conexión generales con bases de datos
├── migrations/                  # Contiene todos los archivos de migraciones que se requieran para su funcionamiento
├── seeders/                     # Contiene todos los archivos de seeders para poblar la base de datos
├── src/                         # Codigo fuente principal de la aplicación
│ └── controllers/
│ └── notificationController
├── tests/                       # Pruebas unitarias y de integración
├── Dockerfile                   # Dockerfile para el microservicio Node.js
├── package.json                 # Dependencias y scripts de Node.js
├── .env.example                 # Ejemplo de variables de entorno
└── README.md                    # Documentación específica del microservicio
```


## 🛠️ Instalación

1. Entra al directorio del proyecto:

   ```sh
   cd node-notifications
   ```

2. Instala dependencias:

   ```sh
   npm install
   ```

3. Configura las variables de entorno en `.env`:

   ```env
      cp .env.example .env

      PORT=3001
      EMAIL_HOST=smtp.mailtrap.io
      EMAIL_PORT=2525
      EMAIL_USER=
      EMAIL_PASS=

      # PostgreSQL
      DB_USERNAME=postgresejemplo
      DB_PASSWORD=adminejemplo
      DB_DATABASE=database
      DB_HOST=localhost
      DB_PORT=
      DB_DIALECT=postgres

      # MongoDB
      MONGO_URI=mongodb://adminEjemplo:adminEjemplo@localhost:27017/adminEjemplo

      LARAVEL_LOGS_URL=
   ```

4. Ejecuta migraciones de base de datos:

   ```sh
   npm run db:migrate
   ```

5. Inicia el microservicio:

   ```sh
   npm run dev
   ```

## 📧 Configuración de Correo

El proyecto utiliza Nodemailer para el envío de correos. La configuración se realiza a través del archivo `.env`:

```
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=tu_correo@gmail.com
EMAIL_PASS=tu_contraseña
EMAIL_FROM=tu_correo@gmail.com
```

Nodemailer es una biblioteca de Node.js para el envío de correos. Para pruebas, se utiliza un mock del servicio de correo que permite simular el envío sin necesidad de un servicio SMTP real.
## ✅ Pruebas unitarias

El proyecto incluye una suite completa de pruebas unitarias que verifica el correcto funcionamiento del servicio de notificaciones.

Para ejecutar las pruebas:

```bash
npm test
```

### Características de las pruebas

- **Simulación de servicios externos**:
  - Mockeo del servicio de email (Nodemailer)
  - Mockeo de las llamadas HTTP a Laravel

- **Aislamiento de pruebas**:
  - Cada prueba se ejecuta en un servidor aislado
  - Limpieza de estados entre pruebas
  - No depende de servicios externos reales

- **Validación de respuestas**:
  - Verificación de códigos de estado HTTP
  - Verificación de estructura de respuestas
  - Verificación de mensajes de error

## 🤝 Integración con Microservicios

Este microservicio gestiona el envio de notificaciones via correo electronico y envia los logs de acciones y errores al microservicio de laravel via axios.