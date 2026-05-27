---
name: yoshkar-ola-data-quality
description: Use this skill for data quality checks, completeness reviews, diagnostics and public data validation for Yoshkar-Ola datasets.
version: "0.1.0"
---

# Качество открытых данных Йошкар-Олы

Используй этот skill, когда пользователь просит проверить качество,
заполненность, дубли, missing fields или диагностику открытых данных.

## MCP-first tools

Основные инструменты:

- `mcp_diagnostics` - состояние MCP, API, cache, layers и tools;
- `layer_stats` - статистика заполненности слоя;
- `layer_facets` - частотные значения публичного поля;
- `quality_summary` - сводка качества по слоям;
- `quality_findings` - список замечаний.

## Правила

- Не делай вывод о качестве данных без вызова MCP tools.
- Для общей проверки сначала вызови `quality_summary`.
- Для конкретного слоя используй `layer_stats` и `quality_findings`.
- Для анализа распределений используй `layer_facets`.
- В ответе разделяй фактические находки и рекомендации.
