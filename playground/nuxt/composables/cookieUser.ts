import { defineStore } from 'pinia'

export const useCookieUser = defineStore('cookiesuser', {
  state: () => ({
    username: 'Elone',
  }),
  persist: {
    storage: persistedState.cookies,
  },
})
