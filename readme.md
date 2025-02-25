# Simple demo of using Vite + Vue + Playwright and Github actions

## Setup Vite "hello world"

```bash
npm install vite@latest
npm create vite@latest frontend -- --template vue
cd frontend
# Test it builds
npm install
npm run dev
```

You should see the app running at http://localhost:5173

## Install playwright

```
npm install --save-dev @playwright/test
npx playwright install --with-deps chromium # You need this for dockerised stuff
```
