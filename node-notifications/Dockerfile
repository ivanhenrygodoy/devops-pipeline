# Usa una imagen Node.js oficial completa
FROM node:18

# Crea el directorio de trabajo
WORKDIR /usr/src/app

# Muestra las versiones de Node y NPM (para debug)
RUN node -v && npm -v

# Copia archivos de dependencias
COPY package*.json ./

# Instala todas las dependencias (evita --production por ahora)
RUN npm install

# Copia el resto del código
COPY . .

# Expone el puerto que usa tu app (ajústalo si es diferente)
EXPOSE 3000

# Comando de arranque
CMD ["node", "src/index.js"]
