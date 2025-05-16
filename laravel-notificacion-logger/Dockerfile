# Imagen base con PHP 8.2 y FPM
FROM php:8.2-fpm

# Instala dependencias del sistema necesarias para Laravel
RUN apt-get update && apt-get install -y \
    git \
    curl \
    zip \
    unzip \
    libonig-dev \
    libxml2-dev \
    libzip-dev \
    libpq-dev \
    && docker-php-ext-install pdo pdo_mysql zip

# Copia Composer desde la imagen oficial
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# Establece el directorio de trabajo
WORKDIR /var/www

# Copia primero los archivos para instalar dependencias
COPY composer.json composer.lock ./

# Información para debug
RUN ls -la && php -v && composer --version

# Instala dependencias PHP con salida detallada
RUN composer install --no-interaction --prefer-dist --optimize-autoloader --verbose

# Copia el resto del código de la aplicación
COPY . .

# Establece permisos correctos para Laravel
RUN chown -R www-data:www-data /var/www \
    && chmod -R 755 /var/www/storage

# Expone el puerto para PHP-FPM
EXPOSE 9000

# Comando por defecto para ejecutar PHP-FPM
CMD ["php-fpm"]


