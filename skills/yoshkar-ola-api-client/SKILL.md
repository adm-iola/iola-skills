---
name: yoshkar-ola-api-client
description: Use this skill when building or debugging clients that must use the public Yoshkar-Ola REST API instead of MCP, especially websites and simple integrations.
version: "0.1.0"
---

# REST API клиент Йошкар-Олы

Используй этот skill, когда клиент не поддерживает MCP и должен работать через
публичный REST API.

## Базовый адрес

```text
https://apiiola.yasg.ru
```

## Текущие endpoints

```text
GET /health
GET /api/v1/schools
GET /api/v1/kindergartens
```

## Правила использования

- Для агентских ответов предпочитай MCP, если он доступен.
- Для сайтов, виджетов и простых внешних клиентов можно использовать REST API.
- Не раскрывай внутренние подключения к базе данных, туннели, пароли и
  непубличные hostnames.
- Делай клиент устойчивым к пустым полям: не все записи обязаны иметь полный
  набор контактов.
- При ошибке API показывай пользователю понятное сообщение и не подставляй
  устаревшие данные из памяти.

## Проверка

Перед выводом в продакшен проверь:

```text
https://apiiola.yasg.ru/health
```

Если health недоступен, не считай данные актуальными.
