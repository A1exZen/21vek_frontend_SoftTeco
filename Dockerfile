# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /app
COPY . .

# Установка pnpm и зависимостей
RUN corepack enable && corepack prepare pnpm@latest --activate
RUN pnpm install --frozen-lockfile

# Сборка
RUN pnpm run build

# Stage 2: Serve with nginx
FROM nginx:alpine

# Копируем прод-сборку
COPY --from=builder /app/dist /usr/share/nginx/html

# Кастомный конфиг для SPA (vite + react-router)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Проброс порта
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
