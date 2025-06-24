# Базовый образ с Node.js 20 (LTS, совместим с pnpm и React 19)
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

# Собираем приложение (Vite использует переменные из .env.production для продакшена)
RUN pnpm build

# Финальный образ для продакшена
FROM node:20-alpine

# Устанавливаем serve для раздачи статических файлов
RUN npm install -g serve

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем собранные файлы
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/.env.production .env

# Указываем порт (5173 из vite.config.ts)
EXPOSE 5173

# Запускаем приложение с переменными окружения
CMD ["serve", "-s", "dist", "-l", "5173"]