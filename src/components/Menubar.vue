<script setup>
  import Menubar from 'primevue/menubar';
import { ref } from "vue";
import { useRouter } from 'vue-router';
import InputText from 'primevue/inputtext';
import AutoComplete from 'primevue/autocomplete';
const router = useRouter();

const items = ref([
    {
        label: 'Home',
        icon: 'pi pi-link',
        command: () => {
            router.push('/');
        }
    },
    {
        label: 'About',
        icon: 'pi pi-link',
        command: () => {
            router.push('/about');
        }
    },
    {
        label: 'Contact',
        icon: 'pi pi-link',
        command: () => {
            router.push('/contact');
        }
    },        

])



const value = ref(null);
const xitems = ref([]);

const search = (event) => {
    xitems.value = [...Array(10).keys()].map((item) => event.query + '-' + item);
}
;
</script>






<template>
<Menubar :model="items" >


  
 <template #start>
      <a href="/"><img alt="logo" src="/img/logo.png" height="40" /></a>
 </template>


  
    <template  #item="{ item, props, hasSubmenu }">
        <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
            <a v-ripple :href="href" v-bind="props.action" @click="navigate">
                <span :class="item.icon" />
                <span>{{ item.label }}</span>
            </a>
        </router-link>
        <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
            <span :class="item.icon" />
            <span>{{ item.label }}</span>
            <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down" />
        </a>
    </template>



 <template #end>

        <AutoComplete v-model="value" :suggestions="xitems" @complete="search" />

 </template>
</Menubar>



</template>
