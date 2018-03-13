# Vue Boilerplate

Vue.js boilerplate with:
- [Vuex](https://github.com/vuejs/vuex/)
- [vue-router](https://github.com/vuejs/vue-router)
- [Sass](https://sass-lang.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Electron](https://electronjs.org/)
- [Jest](https://facebook.github.io/jest/)

## How to build
```bash
yarn install

# web production build
yarn run build

# Electron production build
yarn run build --env.target=electron

# development build with --watch flag
yarn run watch

# run webapp with webpack-dev-server
yarn run server

# run Electron app
yarn run electron
```

After build, check `dist` directory and you can find the build result files.
