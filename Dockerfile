# # Stage 1: Build
# FROM node:20-alpine AS builder

# WORKDIR /app
# COPY . .

# # Установка pnpm и зависимостей
# RUN corepack enable && corepack prepare pnpm@latest --activate
# RUN pnpm install --frozen-lockfile

# # Сборка
# RUN pnpm run build

# # Stage 2: Serve with nginx
# FROM nginx:alpine

# # Копируем прод-сборку
# COPY --from=builder /app/dist /usr/share/nginx/html

# # Кастомный конфиг для SPA (vite + react-router)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# # Проброс порта
# EXPOSE 80

# CMD ["nginx", "-g", "daemon off;"]
# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

# Сначала копируем только файлы, необходимые для установки зависимостей
COPY package.json pnpm-lock.yaml* .npmrc* ./

# Установка pnpm и зависимостей
RUN corepack enable && corepack prepare pnpm@latest --activate && \
    pnpm install --frozen-lockfile

# Копируем остальные файлы
COPY . .

# Сборка (убедитесь, что эта команда создаёт файлы в /app/dist)
RUN pnpm run build

# Stage 2: Serve with nginx
FROM nginx:alpine

# Копируем собранные файлы
COPY --from=builder /app/dist /usr/share/nginx/html

# Копируем конфиг nginx (должен существовать в проекте)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
