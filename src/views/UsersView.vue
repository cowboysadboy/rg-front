<script setup>
import UsersList from '@/components/UsersList.vue'
import { ref, onMounted } from 'vue';
import axios from 'axios';

const users = ref(null);

onMounted(async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        users.value = response.data;
    } catch (error) {
        console.error(error);
    }
});
</script>
<template>
    <main class="container">
        <h2>Пользователи</h2>
        <UsersList :items="users" />
    </main>
</template>
<style lang="scss" scoped>
.container {
    padding: 40px;
    max-width: 860px;
}
</style>
