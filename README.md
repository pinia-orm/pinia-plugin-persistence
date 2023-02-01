<div align="center">
  <img src="./public/logo.svg" wigth='150px' height='150px'>
</div>

<div align="center">
  <h1>pinia-plugin-persistence</h1>
</div>

<p align="center">
  Configurable persistence and rehydration of Pinia stores.
<p>

<p align="center">
  <a href="https://www.npmjs.com/package/pinia-plugin-persistence"><img src="https://img.shields.io/npm/v/pinia-plugin-persistence?color=f2b452&label="></a>
<p>

## Features
- Highly customisable with custom storage, customer serializer, paths picking...

- Compatible with everything that uses Pinia.

- No external dependencies in a tiny package (<1kB gzipped).

> pinia-plugin-persistence requires pinia >= v2.0.0

```typescript
import { defineStore } from 'pinia'

export const useStore = defineStore(
  'main',
  () => {
    const someState = ref('Hello Pinia')
    return { someState }
  },
  {
    persist: true,
  }
)
```

## License

[MIT](./LICENSE) License © 2023-Present [Elone Hoo](https://github.com/elonehoo)
