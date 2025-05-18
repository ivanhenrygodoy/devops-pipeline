# Usa una imagen Node.js oficial completa
FROM node:18

# Crea el directorio de trabajo
WORKDIR /usr/src/app

# Muestra las versiones de Node y NPM (para debug)
RUN node -v && npm -v

# Copia archivos de dependencias
COPY package*.json ./

# Instala todas las dependencias
RUN npm install

# Copia el resto del código
COPY . .

# Expone el puerto que usa tu app
EXPOSE 3000

# Comando de arranque para iniciar el servidor de Node.js
CMD ["node", "src/index.js"]
