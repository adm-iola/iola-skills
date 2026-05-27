# IOLA Skills

![Skills Йошкар-Олы](docs/assets/readme-header.png)

Скиллы для работы с открытыми данными Йошкар-Олы, MCP и отчетами.

Основной контур работы - MCP: агент использует публичный MCP endpoint, когда
клиент поддерживает MCP. REST API остается запасным вариантом для сайтов и
клиентов без MCP-инструментов.

[Документация](https://github.com/adm-iola/iola-skills/wiki) ·
[Быстрый старт](https://github.com/adm-iola/iola-skills/wiki/Быстрый-старт) ·
[Скиллы](https://github.com/adm-iola/iola-skills/wiki/Скиллы) ·
[MCP](https://github.com/adm-iola/iola-skills/wiki/MCP-и-REST-API) ·
[Релизы](https://github.com/adm-iola/iola-skills/wiki/Релизы-и-обновления)

```text
MCP: https://apiiola.yasg.ru/mcp
REST fallback: https://apiiola.yasg.ru/api/v1
```

## Быстрый старт

Установить все встроенные скиллы в Codex:

```bash
npx -y @iola_adm/iola-skills install codex
```

Установить один скилл:

```bash
npx -y @iola_adm/iola-skills install codex yoshkar-ola-open-data
```

Показать список скиллов:

```bash
npx -y @iola_adm/iola-skills list
```

Проверить доступность MCP:

```bash
npx -y @iola_adm/iola-skills doctor
```

После установки перезапусти Codex, чтобы он перечитал локальные skills.

## Состав

- `yoshkar-ola-open-data` - общая работа с открытыми данными.
- `yoshkar-ola-schools` - вопросы по школам.
- `yoshkar-ola-kindergartens` - вопросы по детским садам.
- `yoshkar-ola-layer-router` - выбор нужного слоя данных.
- `yoshkar-ola-fact-check` - проверка фактов и защита от выдуманных ответов.
- `yoshkar-ola-data-quality` - диагностика, статистика и проблемы качества.
- `yoshkar-ola-reports` - отчеты и выгрузки по публичным слоям.
- `yoshkar-ola-mcp-client` - настройка и диагностика MCP-клиентов.
- `yoshkar-ola-api-client` - REST fallback для сайтов и простых клиентов.
- `yoshkar-ola-admin-site` - страницы сайта на публичном API.
- `yoshkar-ola-release-operator` - выпуск версий через GitHub и npm.

## Публичные контуры

Remote MCP:

```text
https://apiiola.yasg.ru/mcp
```

Диагностика MCP:

```text
https://apiiola.yasg.ru/mcp-diagnostics
```

REST API:

```text
https://apiiola.yasg.ru/health
https://apiiola.yasg.ru/api/v1/schools
https://apiiola.yasg.ru/api/v1/kindergartens
```
