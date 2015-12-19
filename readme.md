# Project Template
**Шаблон проекта для быстрого старта SPA приложения.**

## Старт проекта

* Клонирование репозитория и переход в папку проекта:

```
git clone git@github.com:sinkill/pr-template.git new-project && cd new-project
```

* Установка модулей:

```
npm i
```

* Запуск шаблона:

```
npm start -- --open
```

## Команды для запуска

* Запуск с отслеживанием изменений:

```
npm start
```

* Сборка в папку `dist`:

```
npm run build
```

* Сборка в папку `dist` с добавлением файла `robots.txt` для запрета индексации:

```
npm start --robots
```

* Локальный сервер на другом порте:

```
npm start -- --port=9000
```

* Воспроизводить звук при ошибках:

```
npm start -- --beep
```

* Расшарить локальный сервер:

```
npm start -- --tunnel
```

* Открыть ссылку в браузере по умолчанию:

```
npm start -- --open
```

* Собрать архив из папки `dist`:

```
npm run zip
```

* Деплой всего содержимого папки `dist` в ветку `frontend`:

```
npm run deploy
```

## Структура папок и файлов

```
├── app/                         # Исходники
│   ├── blocks/                  # Блоки
│   │   └── block/               # Блок
│   │       ├── block.jade       # Разметка блока
│   │       └── block.styl       # Стили блока
│   ├── data/                    # Данные в формате JSON
│   ├── pages/                   # Страницы
│   │   └── index.jade           # Разметка страницы
│   ├── icons/                   # SVG иконки для генерации векторного спрайта
│   ├── sprites/                 # PNG иконки для генерации растрового спрайта
│   ├── resources/               # Статические файлы для копирования в dist
│   ├── scripts/                 # Скрипты
│   │    ├── controllers/        # Контроллеры
│   │    │   └── controller.js   # Контроллер для шаблона или чего-то другого
│   │    └── application.js      # Главный скрипт приложения
│   └── styles/                  # Стили
│        ├── base/               # Базовые стили
│        │   ├── base.styl       # Базовый стилевой файл
│        │   ├── fonts.styl      # Подключение шрифтов
│        │   └── optimize.styl   # Сброс стилей и фиксы
│        ├── helpers/            # Помощники
│        │   ├── mixins.styl     # Примеси
│        │   ├── sprite.styl     # Переменные с данными PNG спрайта (автогенерация)
│        │   ├── svg.styl        # Переменные с данными SVG иконок (автогенерация)
│        │   └── variables.styl  # Переменные
│        ├── base.styl           # Главный базовый стилевой файл
│        └── common.styl         # Главный стилевой файл
├── dist/                        # Сборка (автогенерация)
│   ├── build/                   # Конкатенация скриптов и стилей
│   ├── data/                    # JSON файлы
│   ├── fonts/                   # Шрифты
│   ├── images/                  # Изображения
│   ├── scripts/                 # Скрипты
│   ├── styles/                  # Стили + стили из bower_components 
│   ├── vendors/                 # Скрипты из bower_components
│   └── index.html               # Страница
├── gulp/                        # Подключаемые скрипты для gulpfile.coffee
│   ├── helpers/                 # Хелперы
│   ├── tasks/                   # Скрипты с задачами для Gulp.js
│   └── config.js                # Список путей для генерации файлов
├── .bowerrc                     # Путь к папки в которую будут загружаться bower модули
├── .csscomb.json                # Конфигурация форматирования CSS
├── .editorconfig                # Конфигурация настроек редактора кода
├── .eslintrc                    # Конфигурация проверки JavaScript в ESLint
├── .gitignore                   # Список исключённых файлов из Git
├── bower.json                   # Bower модули
├── browserlist                  # Список версий браузеров для Autoprefixer
├── gulpfile.js                  # Файл для запуска Gulp.js
├── package.json                 # Список модулей и прочей информации
└── readme.md                    # Документация шаблона
```

## Сборка PNG спрайтов:
Чтобы создать спрайт нужно в папку `app/sprites` добавить PNG иконки.

###Сборка и использование спрайтов:

После сборки в папке `dist/images/sprites` появится спрайт, а в папке `app/sprites` один файл стилей с примесями

Для подключения иконки используется примесь `sprite` со значением `$icon`, где `icon` это название PNG иконки, например:
```css
.icon-fork
    sprite $icon-fork
```

В собранном виде в CSS добавится только спрайт и это будет выглядеть так:
```css
.icon-fork {
    background-image: url("../images/sprites/sprites.png");
    background-position: 0px 0px;
    width: 32px;
    height: 32px;
}
```
