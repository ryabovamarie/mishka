# Проект «Мишка» от [HTML Academy](https://htmlacademy.ru/)

[![Build status][travis-image]][travis-url] [![Dependency status][dependency-image]][dependency-url]

Вёрстка: [Рябова Мария](https://github.com/ryabovamarie/)

[Демо проекта](https://ryabovamarie.github.io/mishka/)

---

## Как использовать

`npm install` - установка зависимостей.

`npm run build` - сборка проекта.

---

## Структура проекта

```bash
.
├── build/            # каталог сборки проекта (cоздаётся автоматически)
├── source/           # каталог размещения исходных файлов проекта
│   ├── css/          # каталог сгенерированных стилей
│   ├── fonts/        # каталог шрифтов
│   ├── img/          # каталог растровых и векторных изображений
│   ├── js/           # каталог JS файлов
│   ├── less/         # каталог файлов препроцессора Less
│   ├── catalog.html  # файл разметки каталога
│   ├── form.html     # файл разметки формы заказа
│   └── index.html    # файл разметки главной страницы
├── .editorconfig     # файл конфигурации настроек редактора
├── .gitattributes    # файл атрибутов Git
├── .gitignore        # файл исключений Git
├── .stylelintrc      # файл конфигурации stylelint
├── .travis.yml       # файл конфигурации Travis CI
├── gulpfile.js       # файл задач gulp
├── package.json      # файл npm зависимостей и настроек проекта
├── package-lock.json # lock-файл npm
├── README.md         # информация о проекте
```

[travis-image]: https://travis-ci.org/ryabovamarie/mishka.svg?branch=master
[travis-url]: https://travis-ci.org/ryabovamarie/mishka
[dependency-image]: https://david-dm.org/ryabovamarie/mishka/dev-status.svg?style=flat-square
[dependency-url]: https://david-dm.org/ryabovamarie/mishka?type=dev
