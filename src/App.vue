<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Menubar from './components/Menubar.vue'  

</script>

<template>
  <Menubar />  
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
