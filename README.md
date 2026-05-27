# IOLA Skills

![Skills Йошкар-Олы](docs/assets/readme-header.png)

Скиллы для работы с открытыми данными Йошкар-Олы, MCP и отчетами.

Основной контур работы - MCP: агент использует публичный MCP endpoint, когда
клиент поддерживает MCP. REST API остается запасным вариантом для сайтов и
клиентов без MCP-инструментов.

```text
MCP: https://apiiola.yasg.ru/mcp
REST fallback: https://apiiola.yasg.ru/api/v1
```

## Установка

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

## Состав

- `yoshkar-ola-open-data` - открытые данные, ответы через MCP и REST fallback.
- `yoshkar-ola-data-quality` - диагностика, статистика слоев, фасеты и проблемы качества.
- `yoshkar-ola-admin-site` - страницы сайта администрации на публичном API.
- `yoshkar-ola-reports` - отчеты и выгрузки по публичным слоям.
- `yoshkar-ola-mcp-client` - настройка и диагностика MCP-клиентов.

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

## Изображение

Изображение для README лежит здесь:

```text
docs/assets/readme-header.png
```

Используется как шапка README и может быть переиспользовано для social preview
репозитория.
