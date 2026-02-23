<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Menubar from './components/Menubar.vue'  

</script>

<template>
  <header>
  <Menubar />  
  </header>
  <RouterView />
</template>

<style scoped>

</style>
