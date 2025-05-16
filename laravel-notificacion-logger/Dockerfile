# Imagen base con PHP 8.2 y FPM
FROM php:8.2-fpm

# Instala dependencias del sistema
RUN apt-get update && apt-get install -y \
    git \
    curl \
    zip \
    unzip \
    libonig-dev \
    libxml2-dev \
    libzip-dev \
    libpq-dev \
    libssl-dev \
    pkg-config \
    && docker-php-ext-install pdo pdo_mysql zip

# Instala la extensión de MongoDB
RUN pecl install mongodb \
    && docker-php-ext-enable mongodb

# Copia Composer desde la imagen oficial
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# Establece el directorio de trabajo
WORKDIR /var/www

# Copia composer.json y composer.lock
COPY composer.json composer.lock ./

# Instala dependencias PHP
RUN composer install --no-interaction --prefer-dist --optimize-autoloader --verbose

# Copia el resto del código
COPY . .

# Permisos para Laravel
RUN chown -R www-data:www-data /var/www \
    && chmod -R 755 /var/www/storage

# Expone el puerto para PHP-FPM
EXPOSE 9000

# Comando por defecto
CMD ["php-fpm"]
