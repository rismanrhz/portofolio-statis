<script setup>
import { ref, onMounted } from "vue";
import { RouterView } from "vue-router";
import LoadingScreen from "./components/sections/LoadingScreen.vue";

const loading = ref(true);

onMounted(() => {
    setTimeout(() => {
        loading.value = false;
    }, 1200);
});
</script>

<template>
    <LoadingScreen v-if="loading" />
    <RouterView v-else />
</template>