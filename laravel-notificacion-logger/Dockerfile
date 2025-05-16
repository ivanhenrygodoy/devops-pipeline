FROM php:8.2-fpm

# Instala extensiones necesarias de PHP y herramientas básicas
RUN apt-get update && apt-get install -y \
    git \
    curl \
    unzip \
    zip \
    libpq-dev \
    libonig-dev \
    libxml2-dev \
    libzip-dev \
    && docker-php-ext-install pdo pdo_pgsql mbstring zip

# Instala Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# Establece el directorio de trabajo
WORKDIR /var/www

# Copia archivos de dependencias primero
COPY composer.json composer.lock ./

# Instala dependencias de PHP
RUN composer install --no-interaction --prefer-dist --optimize-autoloader || cat /root/.composer/cache/logs/*.log

# Copia el resto del código
COPY . .

# Asigna permisos
RUN chown -R www-data:www-data /var/www && chmod -R 755 /var/www

# Expone el puerto (opcional)
EXPOSE 9000

# Comando de inicio (ajusta si usas Laravel Octane o similar)
CMD ["php-fpm"]
