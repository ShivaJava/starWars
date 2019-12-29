<template>
  <div class="App">
    <AppHeader/>
    <router-view/>
  </div>
</template>

<script>
import '@/assets/scss/index.scss'
import AppHeader from '@/components/AppHeader.vue'

export default {
  name: 'App',
  components: {
    AppHeader
  }
}
</script>

<style lang="scss">
  
</style>
