# re-krass-website

## Project setup
```
pnpm install
```

### Compiles and hot-reloads for development
```
pnpm run serve
```

### Compiles and minifies for production
```
pnpm run build
```

### Run your tests
```
pnpm run test
```

### Lints and fixes files
```
pnpm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Vuese Documentation
```bash
# generate documentation
vuese gen
```

See [Vuese](https://vuese.org/cli/) documentation.

## Docsify Documentation
```bash
# init
docsify init ..\docs\

# preview site
docsify serve ..\docs\
```

Preview server [Server](http://localhost:3000)

See [Docsify](https://docsify.js.org/#/quickstart) documentation.


## Vue
```bash
# install global
pnpm install -g vue
```

## Vue Cli
```bash
# install global
pnpm install -g @vue/cli

# Vue Cli Service
pnpm install -g @vue/cli-service

# Vue Cli Babel
pnpm install -g @vue/cli-plugin-babel

# Vue Cli Eslint
pnpm install -g @vue/cli-plugin-eslint
```

See [Vue-Clie](https://cli.vuejs.org/guide/installation.html) instructions.

## PNPM

Search for outdated packages
```bash
pnpm outdated --depth=0
# global
pnpm outdated -g --depth=0
```

## Set up Vue CLI 3 project

```bash
vue create re-krass-homepage

Vue CLI v4.1.2
? Please pick a preset: Manually select features
? Check the features needed for your project: Babel, Router, Vuex, CSS Pre-processors, Linter, Unit, E2E
? Use history mode for router? (Requires proper server setup for index fallback in production) No
? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default): Sass/SCSS (with dart-sass)
? Pick a linter / formatter config: Prettier
? Pick additional lint features: Lint on save, Lint and fix on commit
? Pick a unit testing solution: Jest
? Pick a E2E testing solution: Cypress
? Where do you prefer placing config for Babel, ESLint, etc.? In dedicated config files
? Save this as a preset for future projects? Yes
? Save preset as: re-krass-homepage
? Pick the package manager to use when installing dependencies: PNPM

# add vuetify
vue add vuetify

# Vue UI install
// ensure Vue CLI is >= 3.0
$ vue --version

// Then start the UI
$ vue ui
```

Vue [quick-start](https://vuetifyjs.com/en/getting-started/quick-start)