# Release process

This package publishes skills through npm as `@iola_adm/iola-skills`.

## Requirements

- Node.js `>=22.5.0`
- GitHub secret `NPM_TOKEN`
- Repository write access for maintainers, including `yasg1988`.

## Checklist

```bash
npm install
npm test
npm pack --dry-run
```

## Publish

Create a tag matching `package.json`:

```bash
git tag -a v0.1.0 -m "v0.1.0"
git push origin main
git push origin v0.1.0
```

Create a GitHub Release. The publish workflow will publish the npm package.
