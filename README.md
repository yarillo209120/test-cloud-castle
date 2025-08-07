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

test-cloud-castle/<br>
├── app/                    # Next.js 13 App Router<br>
│   ├── layout.tsx          # Главный лейаут<br>
│   ├── page.module.scss    # Основные стили страницы<br>
|   └── page.tsx            # Основная страница<br>
│<br>
├── public/                 # Статические ресурсы<br>
│   ├── fonts/              # Шрифты (WOFF2, WOFF)<br>
│   ├── images/             # Оптимизированные изображения<br>
│   ├── favicon.ico         # Фавиконки<br>
│   ├── robots.txt          # Правила для поисковиков<br>
|   └── sitemap.hml         # Карта сайта<br>
│<br>
├── src/<br>
│   ├── components/         # Компоненты<br>
│   │   ├── sections/       # Секции страницы<br>
│   │   │   ├── Header/     # Хедер с модульными стилями<br>
│   │   │   │   ├── Header.tsx<br>
│   │   │   │   └── Header.module.scss<br>
│   │   │   └── ...         # Другие секции<br>
│   │   │<br>
│   │   └── ui/             # Переиспользуемые UI-компоненты<br>
│   │       ├── Logo/<br>
│   │       └── ...<br>
│   │
│   ├── styles/             # Глобальные стили<br>
│   │   ├── globals.scss    # Основные стили<br>
│   │   ├── variables.scss  # SCSS-переменные<br>
│   │   └── normalize.scss  # Стили нормализации<br>
│   │
│   └── utils/              # Вспомогательные функции<br>
│       ├── smoothScroll.ts # Утилиты скролла<br>
│
├── next.config.js          # Конфигурация Next.js<br>
├── package.json            # Зависимости и скрипты<br>
└── README.md               # Документация проекта<br>
