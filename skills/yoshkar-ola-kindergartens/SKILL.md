---
name: yoshkar-ola-kindergartens
description: Use this skill when the user asks about kindergartens in Yoshkar-Ola: names, heads, addresses, contacts, websites, organization details, comparisons or simple facts that must be checked through MCP.
version: "0.1.0"
---

# Детские сады Йошкар-Олы

Используй этот skill для вопросов о детских садах городского округа "Город
Йошкар-Ола".

## Основной источник

Всегда проверяй факты через MCP, если MCP доступен:

```text
https://apiiola.yasg.ru/mcp
```

Предпочтительный порядок:

1. `layer_suggest` - убедиться, что вопрос относится к слою `kindergartens`.
2. `layer_answer_context` - получить записи, факты и рекомендуемый ответ.
3. `layer_facets` - использовать для списков и группировок.
4. `layer_stats` - использовать для сводок по заполненности.

## Как отвечать

- Отвечай только по данным MCP или REST fallback.
- Если пользователь спрашивает заведующего, адрес или контакты, сначала найди
  конкретную запись детского сада.
- Если найдено несколько похожих садов, покажи короткий список и уточни номер
  или название.
- Если данных нет, не додумывай: скажи, что сведения не найдены в публичном
  наборе.

## REST fallback

Если MCP недоступен, допускается REST fallback:

```text
https://apiiola.yasg.ru/api/v1/kindergartens
```

REST используй только как запасной путь для клиентов без MCP.
