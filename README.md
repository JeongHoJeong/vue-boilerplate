# Vue Boilerplate

Vue.js boilerplate with:
- Vuex
- vue-router
- Sass
- TypeScript
- Electron

## How to build
```bash
npm install

# web development build
npm run build

# web production build
PROD=1 npm run build

# Electron dev build
TARGET=electron npm run build

# Electron prod build
TARGET=electron PROD=1 npm run build

# same as build but with --watch flag
npm run watch

# run webapp
npm run web

# run Electron app
npm run electron
```

After build, check `dist` directory and you can find the build result files.