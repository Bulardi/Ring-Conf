# Ring Configurator (Next.js)

This project has been migrated to Next.js while preserving the existing compiled ring configurator UI and Threedium integration.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000/Ring-Conf`.

## Build

```bash
npm run build
npm start
```

## Base path

By default, the app uses `/Ring-Conf` as its Next.js base path to match the previous deployment paths.

Override it with:

```bash
NEXT_PUBLIC_BASE_PATH=""
```
