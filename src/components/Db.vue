<script setup>
import Button from "primevue/button";  
import { ref,onMounted,inject } from "vue";
  const items = ref([
  ]);

const log = inject('log');
const worker = inject('Worker');
onMounted(() => {
});

const init_sqlite3 = async () => {
log.info("...init_sqlite3");
worker.postMessage(["test"]);
};



</script>


<template>
  <Button label="Init Sqlite3" @click="init_sqlite3" class="db_sqlite3" />

</template>

<style>
  .a2d {
   white-space: nowrap;
  }
</style>



