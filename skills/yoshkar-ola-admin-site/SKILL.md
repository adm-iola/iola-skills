---
name: yoshkar-ola-admin-site
description: Use this skill when working on administration website pages that display Yoshkar-Ola public data, including schools and kindergartens pages backed by the public API.
version: "0.1.0"
---

# Страницы сайта администрации и публичные данные

Используй этот skill при разработке или проверке страниц сайта администрации,
которые показывают открытые данные городского округа.

## Источники

Для агентной проверки и поиска используй MCP:

```text
https://apiiola.yasg.ru/mcp
```

Для фронтенда сайта используй REST API:

```text
https://apiiola.yasg.ru/api/v1/schools
https://apiiola.yasg.ru/api/v1/kindergartens
```

REST API можно использовать на сайте, MCP - для агентов, диагностики,
контроля качества и генерации контекста.

## UI-правила

- Показывай только публичные поля.
- Не выводи внутренние служебные поля, если они не одобрены для страницы.
- Для карточек организаций показывай название, адрес, телефон, email, сайт,
  ИНН, руководителя и лицензию только если эти поля есть в API.
- При изменении полей сверяйся с MCP `layer_schema` и REST ответом.
