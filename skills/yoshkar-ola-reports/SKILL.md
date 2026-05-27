---
name: yoshkar-ola-reports
description: Use this skill for reports, exports and tables based on Yoshkar-Ola public data layers.
version: "0.1.0"
---

# Отчеты по открытым данным Йошкар-Олы

Используй этот skill, когда пользователь просит таблицу, CSV/XLSX, сводку или
отчет по публичным слоям данных.

## MCP-first workflow

1. Получи список слоев через `layer_list`.
2. Для нужного слоя получи схему через `layer_schema`.
3. Для фильтрации используй `layer_query`, `layer_facets` и `layer_stats`.
4. Для проверки качества отчета используй `quality_summary` или
   `quality_findings`.

## Правила

- Не включай непубличные поля.
- Указывай источник: public MCP `https://apiiola.yasg.ru/mcp` или REST API.
- Если пользователь просит файл, формируй таблицу с понятными заголовками:
  название, адрес, телефон, email, сайт, ИНН, руководитель, лицензия.
