<script setup lang="ts">
import {useCookieUser} from './composables/cookieUser'
import {useLocalUser} from './composables/localUser'

const local = useLocalUser()
const cookie = useCookieUser()
</script>

<template>
  <div>
    <span>Local:</span>
    <input v-model="local.username">
  </div>
  <div>
    <span>Cookie:</span>
    <input v-model="cookie.username">
  </div>
</template>
