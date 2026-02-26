<script setup>
import Breadcrumb from '../components/Breadcrumb.vue'
import Log2textarea from '../components/Log2textarea.vue'


import { ref,onMounted } from "vue";
  const items = ref([
  ]);

</script>


<template>
<Breadcrumb :items="items"  />

</template>

<style>
  

</style>


