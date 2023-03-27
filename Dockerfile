# Используйте образ node в качестве базового
FROM node:14

# Установите рабочую директорию
WORKDIR /app

# Скопируйте package.json и package-lock.json
COPY package*.json ./

# Установите зависимости
RUN npm install

# Скопируйте все файлы проекта в контейнер
COPY . .

# Соберите приложение
RUN npm run build

# Установите serve
RUN npm install -g serve

# Определите команду запуска приложения
CMD ["serve", "-s", "build"]
