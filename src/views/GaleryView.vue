<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const galery = ref(null);

onMounted(async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=16');
        galery.value = response.data;
    } catch (error) {
        console.error(error);
    }
});
</script>
<template>
    <main class="container">
        <h2>Галерея</h2>
        <div class="galery">
            <img class="galery__img" v-for="elem, i in galery" :key="i" :src="elem.thumbnailUrl" :alt="elem.title">
        </div>
    </main>
</template>
<style lang="scss" scoped>
.container {
    padding: 40px;
    max-width: 860px;

    .galery {
        margin-top: 30px;
        width: 100%;
        display: flex;
        flex-wrap: wrap;

        &__img {
            width: 25%;
        }
    }
}
</style>
