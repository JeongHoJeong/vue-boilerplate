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
yarn run build --env.production

# Electron dev build
yarn run build --env.target=electron

# Electron prod build
yarn run build --env.target=electron --env.production

# same as build but with --watch flag
yarn run watch

# run webapp
yarn run web

# run Electron app
yarn run electron
```

After build, check `dist` directory and you can find the build result files.
