# Этап 1: Сборка проекта
FROM node:20-alpine AS builder

# Установка pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# Копируем только package.json и pnpm-lock.yaml для ускорения сборки
COPY package.json pnpm-lock.yaml ./

# Установка зависимостей
RUN pnpm install

# Копируем остальные файлы
COPY . .

# Установка переменной окружения (при необходимости)
ENV NODE_ENV=production

# Сборка проекта
RUN pnpm build

# Этап 2: Сервер для отдачи статики (nginx)
FROM nginx:stable-alpine

# Удалим стандартную конфигурацию
RUN rm /etc/nginx/conf.d/default.conf

# Копируем собственный конфиг nginx
COPY nginx.conf /etc/nginx/conf.d

# Копируем собранные файлы в nginx
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 5173

CMD ["nginx", "-g", "daemon off;"]
