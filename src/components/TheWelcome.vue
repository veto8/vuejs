<script setup>

import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import {ref} from 'vue';
const openReadmeInEditor = () => fetch('/__open-in-editor?file=README.md')
const text = ref('');
</script>

<template>

<div>
  <InputText v-model="text"/>
  <Button label="Save" />
  {{text}}
</div>

</template>
