# Laravel Notificación Logger

Backend principal construido con [Laravel](https://laravel.com/) para la gestión de envio de notificaciones y guardado de logs de acciones y errores.

## Características

- Framework Laravel 12.x
- Soporte para MongoDB y PostgreSQL
- Integración con microservicio Node.js para manejo de logs.
- Almacenamiento de logs de acciones y errores tanto de el microservicio de node como del mismo en mongodb

## Instalación

1. Entra al directorio del proyecto:

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

## Pruebas

```sh
php artisan test
```

## Integración

Este backend se comunica con el microservicio Node.js para el envío y registro de notificaciones. Ambos servicios deben estar corriendo para el funcionamiento completo del sistema.