# Базовый образ для сборки
FROM node:20-alpine AS builder

# Устанавливаем pnpm
RUN npm install -g pnpm

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем файлы зависимостей и переменные окружения
COPY package.json pnpm-lock.yaml ./
COPY .env.development .env.development
COPY .env.production .env.production

# Устанавливаем зависимости
RUN pnpm install --frozen-lockfile

# Копируем весь проект
COPY . .

# Собираем приложение
RUN pnpm build

# Финальный образ с Nginx
FROM nginx:alpine

# Копируем собранные файлы в директорию Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Копируем кастомный конфиг Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Указываем порт
EXPOSE 80

# Запускаем Nginx
CMD ["nginx", "-g", "daemon off;"]