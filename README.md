# Vue Boilerplate

Vue.js boilerplate with:
- Vuex
- vue-router
- Sass
- TypeScript
- Electron

## How to build
```bash
yarn install

# web development build
yarn run build

# web production build
PROD=1 yarn run build

# Electron dev build
TARGET=electron yarn run build

# Electron prod build
TARGET=electron PROD=1 yarn run build

# same as build but with --watch flag
yarn run watch

# run webapp
yarn run web

# run Electron app
yarn run electron
```

After build, check `dist` directory and you can find the build result files.
