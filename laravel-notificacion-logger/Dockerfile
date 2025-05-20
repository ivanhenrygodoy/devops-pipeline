# Imagen base con PHP 8.2 y FPM
FROM php:8.2-fpm

# Instala Apache y otras dependencias necesarias
RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip \
    apache2 \
    libapache2-mod-fcgid \
    && docker-php-ext-install pdo pdo_mysql mbstring exif pcntl bcmath gd \
    && docker-php-ext-configure gd \
    && docker-php-ext-install gd

# Instala la extensión de MongoDB para PHP
RUN pecl install mongodb \
    && docker-php-ext-enable mongodb

# Configura Apache para Laravel
RUN a2enmod proxy proxy_fcgi rewrite
RUN mv /etc/apache2/sites-available/000-default.conf /etc/apache2/sites-available/000-default.conf.backup
COPY apache.conf /etc/apache2/sites-available/000-default.conf
RUN a2ensite 000-default.conf
RUN a2enmod rewrite

# Configura PHP-FPM
RUN echo "ProxyPassMatch ^/(.*\.php(/.*)?)$ fcgi://127.0.0.1:9000/var/www/public/$1" > /etc/apache2/conf-available/php-fpm.conf
RUN a2enconf php-fpm

# Copia Composer desde la imagen oficial
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# Establece el directorio de trabajo
WORKDIR /var/www

# Copia TODO el código fuente de Laravel
COPY . .

# Configura el DocumentRoot de Apache
RUN sed -i 's!/var/www/html!/var/www/public!g' /etc/apache2/sites-available/000-default.conf.backup

# Corre Composer ahora que artisan ya está presente
RUN composer install --no-interaction --prefer-dist --optimize-autoloader --verbose

# Establece permisos correctos
RUN chown -R www-data:www-data /var/www \
    && chmod -R 755 /var/www/storage

# Expone los puertos necesarios
EXPOSE 80
EXPOSE 9000

# Comando por defecto para iniciar Apache y PHP-FPM
CMD service apache2 start && php-fpm
