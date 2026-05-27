---
name: yoshkar-ola-open-data
description: Use this skill when answering questions about open datasets for the urban district "Город Йошкар-Ола", especially schools, kindergartens and future public layers exposed through the public MCP server.
version: "0.1.0"
---

# Открытые данные городского округа "Город Йошкар-Ола"

Используй этот skill, когда пользователь спрашивает о публичных данных
городского округа "Город Йошкар-Ола".

## Основной режим

Если среда поддерживает MCP, всегда используй remote MCP:

```text
https://apiiola.yasg.ru/mcp
```

Основной порядок:

1. Для диагностики и версии контракта используй `get_contract_info` или
   `mcp_diagnostics`.
2. Для выбора слоя используй `layer_suggest`.
3. Для подготовки ответа используй `layer_answer_context`.
4. Отвечай только по `facts`, `results` и `recommended_answer_ru`.

Не отвечай из памяти, если сведения можно получить через MCP.

## REST fallback

Если MCP недоступен, но среда умеет HTTP-запросы, используй REST API:

```text
https://apiiola.yasg.ru/health
https://apiiola.yasg.ru/api/v1/schools
https://apiiola.yasg.ru/api/v1/kindergartens
```

REST API нужен как fallback для клиентов без MCP. Не используй API-first, если
MCP доступен.

## Правила ответа

- Не добавляй телефоны, адреса, сайты, ФИО, ИНН, лицензии и другие реквизиты,
  которых нет в ответе MCP или REST API.
- Если данных нет, прямо скажи, что в доступных открытых данных сведения не
  найдены.
- Если найдено несколько похожих организаций, покажи короткий список и уточни,
  какая запись нужна.
- Если пользователь сообщает о неточности, не исправляй данные самостоятельно:
  скажи, что сведения нужно проверить в источнике и передать сопровождающим
  набора данных.
