<script setup>
import Button from "primevue/button";  
import { ref,onMounted,inject } from "vue";
  const items = ref([
  ]);

const log = inject('log');
const test = inject('Test'); 
const worker = inject('Worker');

onMounted(() => {

});

const init_sqlite3 = async () => {
log.info("...init_sqlite3");
log.info(test.message);
log.info(test.sum(2,3));

worker.postMessage(["test"]);

worker.onmessage = (evento) => {
  const accion = evento.data[0];
  const argumentos = evento.data[1];
  switch (accion) {
case "test":
console.log("ffffffffF");
      break;
  }
};


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



