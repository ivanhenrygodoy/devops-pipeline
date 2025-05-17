# 📱 Laravel Notificación Logger

Microservicio principal construido con Laravel para la gestión de notificaciones y logs.

## 🚀 Características Principales

- 📧 Gestión de envío de notificaciones por correo electrónico
- 📊 Almacenamiento de logs en MongoDB
- 🔄 Integración con microservicio Node.js
- 🔐 Soporte para múltiples bases de datos (MongoDB y PostgreSQL)
- 🛠️ Sistema completo de pruebas unitarias

## 📁 Estructura del Proyecto

```
laravel-notificacion-logger/
├── app/                # Código fuente principal
│   ├── Http/          # Controladores y middleware
│   ├── Models/        # Modelos de datos
│   └── Services/      # Servicios de negocio
├── bootstrap/          # Configuración inicial
├── config/            # Archivos de configuración
├── database/          # Migraciones y seeders
│   ├── migrations/
│   └── seeders/
├── public/            # Archivos públicos
├── resources/         # Vistas y assets
│   └── lang/          # Archivos de idioma
├── routes/            # Definición de rutas
├── storage/           # Archivos generados
├── tests/            # Pruebas unitarias
├── vendor/            # Dependencias
├── Dockerfile         # Configuración Docker
├── composer.json      # Dependencias PHP
├── .env.example       # Ejemplo de configuración
└── README.md          # Documentación del proyecto
```

## 🛠️ Instalación

1. Navega al directorio del proyecto:

   ```bash
   cd laravel-notificacion-logger
   ```

2. Instala las dependencias:

   ```bash
   # Dependencias PHP
   composer install

   # Dependencias JavaScript (opcional)
   npm install
   ```

3. Configura el entorno:

   ```bash
   # Copia el archivo de configuración
   cp .env.example .env
   ```

   Edita el archivo `.env` con la siguiente configuración mínima:

   ```env
   APP_NAME="Laravel Notificación Logger"
   APP_ENV=local
   APP_DEBUG=true
   APP_URL=http://localhost

   # MongoDB
   MONGODB_URI=mongodb://admin:admin123@localhost:27018/admin
   MONGO_DSN=laravel_notification_logs

   # Email
   MAIL_MAILER=smtp
   MAIL_HOST=smtp.example.com
   MAIL_PORT=587
   MAIL_USERNAME=your-email@example.com
   MAIL_PASSWORD=your-password
   MAIL_ENCRYPTION=tls
   MAIL_FROM_ADDRESS=notifications@example.com
   ```

4. Genera la clave de la aplicación y ejecuta las migraciones:

   ```bash
   php artisan key:generate
   php artisan migrate
   ```

5. Inicia el servidor:

   ```bash
   php artisan serve
   ```

   El servidor estará disponible en `http://localhost:8000`

## 📧 Configuración de Correo

El proyecto utiliza el servicio de correo integrado de Laravel. La configuración se realiza a través del archivo `.env`:

```
MAIL_MAILER=smtp
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USERNAME=tu_correo@gmail.com
MAIL_PASSWORD=tu_contraseña
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS=tu_correo@gmail.com
MAIL_FROM_NAME="${APP_NAME}"
```

Laravel Mail es el servicio integrado de Laravel para el envío de correos. Para pruebas, se utiliza `Mail::fake()` que permite simular el envío de correos sin necesidad de un servicio SMTP real.

## 🔧 Pruebas

El proyecto incluye una suite completa de pruebas unitarias y de integración ubicadas en la carpeta `tests/`.

Para ejecutar todas las pruebas:

```bash
php artisan test
```

Para ejecutar pruebas específicas:

```bash
php artisan test tests/Feature/SendNotificationTest.php
```

### Características de las pruebas

- **Simulación de servicios externos**:
  - Mockeo del servicio de correo (Laravel Mail)
  - Mockeo de la base de datos
  - Mockeo de las llamadas HTTP a Node.js

- **Aislamiento de pruebas**:
  - Cada prueba se ejecuta en una base de datos aislada
  - Limpieza de estados entre pruebas
  - No depende de servicios externos reales

- **Validación de respuestas**:
  - Verificación de códigos de estado HTTP
  - Verificación de estructura de respuestas
  - Verificación de mensajes de error

## 📊 Sistema de Logs

El microservicio utiliza MongoDB para el almacenamiento de logs relacionados con las notificaciones:

- **Colección principal**: `laravel_notification_logs`
  - **action_logs**: Registros de acciones exitosas
  - **error_logs**: Registros de errores durante el envío de notificaciones

## 🤝 Integración con Microservicios

Este microservicio se integra con el servicio de Node.js para:
- Recepción de logs de acciones y errores
- Gestión de notificaciones

**Requisito**: Ambos servicios deben estar en ejecución para el funcionamiento completo del sistema.

## 📝 Notas

- El sistema utiliza SMTP para el envío de correos electrónicos
- Se recomienda configurar un servidor SMTP dedicado para producción
- Las colecciones se crean automáticamente cuando se realiza el envio de logs a laravel-notificacion-logger via axios en MongoDB
- El sistema utiliza Laravel 12.x como framework base