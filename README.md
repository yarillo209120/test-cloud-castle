# 🏞️ Путешествие по плотинке Екатеринбурга

Интерактивный гид по исторической плотине 1723 года с игрой-квестом

[![GitHub Pages](https://img.shields.io/badge/🌐-GitHub_Pages-blue?style=flat-square)](https://yarillo209120.github.io/test-cloud-castle)
[![Next.js](https://img.shields.io/badge/Next.js-13.3.0-black?style=flat-square&logo=vercel)](https://nextjs.org/)
[![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)](LICENSE)

<div align="center">
  <img src="public/images/og-preview.webp" width="600" alt="Превью проекта">
</div>


## ✨ Особенности

- 🗺️ Интерактивная программа маршрута
- 🎮 Игра-бинго по точкам интереса
- 📚 Исторические справки о В.И. де Геннине
- 📱 Адаптивный дизайн для всех устройств


## 🛠️ Технологии

| Технология       | Применение                     |
|------------------|--------------------------------|
| Next.js 13       | Фреймворк React               |
| TypeScript       | Типизация кода                |
| SCSS Modules     | Стилизация компонентов        |
| GitHub Pages     | Деплой статического сайта     |


🎨 Структура проекта

test-cloud-castle/
├── app/                    # Next.js 13 App Router
│   ├── layout.tsx          # Главный лейаут
│   ├── page.module.scss    # Основные стили страницы
|   └── page.tsx            # Основная страница
│
├── public/                 # Статические ресурсы
│   ├── fonts/              # Шрифты (WOFF2, WOFF)
│   ├── images/             # Оптимизированные изображения
│   ├── favicon.ico         # Фавиконки
│   ├── robots.txt          # Правила для поисковиков
|   └── sitemap.hml         # Карта сайта
│
├── src/
│   ├── components/         # Компоненты
│   │   ├── sections/       # Секции страницы
│   │   │   ├── Header/     # Хедер с модульными стилями
│   │   │   │   ├── Header.tsx
│   │   │   │   └── Header.module.scss
│   │   │   └── ...         # Другие секции
│   │   │
│   │   └── ui/             # Переиспользуемые UI-компоненты
│   │       ├── Logo/
│   │       └── ...
│   │
│   ├── styles/             # Глобальные стили
│   │   ├── globals.scss    # Основные стили
│   │   ├── variables.scss  # SCSS-переменные
│   │   └── normalize.scss  # Стили нормализации
│   │
│   └── utils/              # Вспомогательные функции
│       ├── smoothScroll.ts # Утилиты скролла
│
├── next.config.js          # Конфигурация Next.js
├── package.json            # Зависимости и скрипты
└── README.md               # Документация проекта
