# Crystal Property Solutions (React + Vite)

Crystal Property Solutions is a responsive marketing website for property care services, including:
window cleaning, lawn mowing, garbage bin cleaning, pressure washing, and junk removal.

The app uses:
- React (UI)
- Vite (dev server + build)
- Framer Motion (section/hover animations)
- ESLint (code quality)

## Requirements

- Node.js: Vite requires Node.js `20.19+` or `22.12+`
- npm: `npm install` / `npm run ...`

## Getting started

1. Install dependencies

```powershell
npm install
```

2. Start the dev server

```powershell
npm run dev
```

3. Open the local URL shown in the terminal (usually `http://localhost:5173/`).

## Test on your phone (same Wi-Fi)

To access the dev server from your phone on the same network:

```powershell
npm run dev -- --host 0.0.0.0
```

Then open the `Network:` URL shown by Vite (example: `http://192.168.1.40:5173/`).

## Build for production

```powershell
npm run build
```

The production build is generated in `dist/`.

## Preview production build

```powershell
npm run preview
```

## Lint

```powershell
npm run lint
```

## Notes

If you run into Vite startup issues, double-check your Node.js version (upgrade to Node `22.12+` is typically the quickest fix).
