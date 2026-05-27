# IOLA Skills

Agent skills for public data, MCP clients, administration website pages and
reports for the urban district "Город Йошкар-Ола".

The skills are MCP-first: agents should use the public remote MCP endpoint when
the client supports MCP, and use the REST API only as a fallback for clients
without MCP tools.

```text
MCP: https://apiiola.yasg.ru/mcp
REST fallback: https://apiiola.yasg.ru/api/v1
```

## Install

Install all bundled skills into Codex:

```bash
npx -y @iola_adm/iola-skills install codex
```

Install one skill:

```bash
npx -y @iola_adm/iola-skills install codex yoshkar-ola-open-data
```

List bundled skills:

```bash
npx -y @iola_adm/iola-skills list
```

Run diagnostics:

```bash
npx -y @iola_adm/iola-skills doctor
```

## Bundled Skills

- `yoshkar-ola-open-data` - public datasets, MCP-first answers and REST fallback.
- `yoshkar-ola-data-quality` - diagnostics, layer stats, facets and quality findings.
- `yoshkar-ola-admin-site` - administration website pages backed by the public API.
- `yoshkar-ola-reports` - reports and exports based on public layers.
- `yoshkar-ola-mcp-client` - MCP client setup and troubleshooting.

## Public Surfaces

Remote MCP:

```text
https://apiiola.yasg.ru/mcp
```

MCP diagnostics:

```text
https://apiiola.yasg.ru/mcp-diagnostics
```

REST API:

```text
https://apiiola.yasg.ru/health
https://apiiola.yasg.ru/api/v1/schools
https://apiiola.yasg.ru/api/v1/kindergartens
```

## Assets

The README header image should be placed at:

```text
docs/assets/readme-header.png
```

The image supplied in the chat was not available to the filesystem as a file in
this session, so the asset path is prepared but the binary must be added from
the saved PNG.
