---
name: yoshkar-ola-schools
description: Use this skill when the user asks about schools in Yoshkar-Ola: names, directors, addresses, contacts, websites, organization details, comparisons or simple facts that must be checked through MCP.
version: "0.1.0"
---

# Школы Йошкар-Олы

Используй этот skill для вопросов о школах городского округа "Город
Йошкар-Ола".

## Основной источник

Всегда проверяй факты через MCP, если MCP доступен:

```text
https://apiiola.yasg.ru/mcp
```

Предпочтительный порядок:

1. `layer_suggest` - убедиться, что вопрос относится к слою `schools`.
2. `layer_answer_context` - получить записи, факты и рекомендуемый ответ.
3. `layer_facets` - использовать только для списков и группировок.
4. `layer_stats` - использовать для сводок по заполненности.

## Как отвечать

- Отвечай только по найденным данным MCP.
- Если пользователь спрашивает "в какой школе директор ...", ищи по директору
  или похожим ФИО и называй только найденную школу.
- Если совпадений несколько, покажи короткий список и попроси уточнить.
- Если совпадений нет, прямо скажи, что в публичных данных школы не найдены.
- Не добавляй адреса, телефоны, сайты, должности и ФИО из памяти.

## REST fallback

Если MCP недоступен, допускается REST fallback:

```text
https://apiiola.yasg.ru/api/v1/schools
```

REST используй только как запасной путь для клиентов без MCP.
