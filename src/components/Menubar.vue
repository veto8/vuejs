<script setup>
  import Menubar from 'primevue/menubar';
import { ref } from "vue";
import { useRouter } from 'vue-router';

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

]);
</script>






<template>
<Menubar :model="items">
    <template #item="{ item, props, hasSubmenu }">
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
</Menubar>
</template>



