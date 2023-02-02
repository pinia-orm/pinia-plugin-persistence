# Getting Started

## Overview

This plugin is compatible with `pinia^2.0.0`, make sure you have [Pinia installed](https://pinia.vuejs.org/getting-started.html) before proceeding. `pinia-plugin-persistence` comes with many features to make persistence of Pinia stores easy and configurable with:
- An API similar to [`vuex-persistedstate`](https://github.com/robinvdvleuten/vuex-persistedstate).
- Per-store configuration.
- Custom storage and custom data serializer.
- Pre and post hydration hooks.
- Multiple configurations per store.
- Compatibility with Vue 2 and 3.
- No external dependencies.

## Adding plugin to your Project

With npm

```bash
npm install -D pinia-plugin-persistence
```

or with yarn

```bash
yarn add -D pinia-plugin-persistence
```

or with pnpm

```bash
pnpm add -D pinia-plugin-persistence
```

## Configuring plugin

```ts
import { createPinia } from 'pinia'
import pluginPersistence from 'pinia-plugin-persistence'

const pinia = createPinia()
pinia.use(pluginPersistence)
```

## Usage

When declaring your store, set the new `persist` option to `true`.

```ts
import { defineStore } from 'pinia'

export const useStore = defineStore(
  'main',
  () => {
    const someState = ref('hello pinia')
    return { someState }
  },
  {
    persist: true,
  },
)
```

## Using Unreleased Commits

If you can't wait for a new release to test the latest features, you will need to clone the [plugin repo](https://github.com/elonehoo/pinia-plugin-persistence) to your local machine and then build and link it yourself ([pnpm](https://pnpm.io/) is required):
