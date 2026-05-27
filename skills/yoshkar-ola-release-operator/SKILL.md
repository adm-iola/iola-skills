---
name: yoshkar-ola-release-operator
description: Use this skill when releasing IOLA packages: run local tests, commit, tag, push to GitHub, create a release, verify GitHub Actions and npm latest.
version: "0.1.0"
---

# Release operator для IOLA

Используй этот skill для выпуска `iola-skills`, `iola-cli` и связанных
пакетов администрации.

## Стандартный порядок

1. Проверить рабочее дерево и не перетирать чужие изменения.
2. Запустить локальные тесты.
3. Обновить версию в `package.json` и `package-lock.json`.
4. Сделать коммит.
5. Создать аннотированный тег `vX.Y.Z`.
6. Запушить `main` и тег.
7. Создать GitHub Release.
8. Дождаться GitHub Actions.
9. Проверить npm `latest`.
10. Проверить установку через `npx`.

## Команды для iola-skills

```bash
npm test
npm pack --dry-run
git status --short --branch
git tag -a vX.Y.Z -m "vX.Y.Z"
git push origin main
git push origin vX.Y.Z
gh release create vX.Y.Z --repo adm-iola/iola-skills --title "vX.Y.Z" --notes "..."
npm view @iola_adm/iola-skills version dist-tags.latest
npx -y @iola_adm/iola-skills@latest list
```

## Правила доступа

- Для репозиториев администрации используй локальную identity репозитория.
- Не печатай и не сохраняй токены.
- GitHub Actions должен получать npm токен только через secret `NPM_TOKEN`.
- После релиза всегда проверяй фактическую версию в npm, а не только GitHub.
