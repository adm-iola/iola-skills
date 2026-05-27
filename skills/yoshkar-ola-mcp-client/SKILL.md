---
name: yoshkar-ola-mcp-client
description: Use this skill when configuring or troubleshooting MCP clients for Yoshkar-Ola public data.
version: "0.1.0"
---

# MCP-клиент открытых данных Йошкар-Олы

Используй этот skill для подключения, диагностики и проверки MCP-клиентов.

## Endpoint

```text
https://apiiola.yasg.ru/mcp
```

Transport:

```text
streamable-http
```

## Проверка

Используй:

- `mcp_diagnostics`;
- `get_contract_info`;
- `layer_list`;
- `layer_answer_context`.

Если клиент не поддерживает remote MCP, можно использовать npm stdio-wrapper:

```bash
npx -y @iola_adm/yoshkar-ola-public-mcp
```

Если клиент не поддерживает MCP вообще, используй REST fallback.
