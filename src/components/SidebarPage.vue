<script setup>
defineProps({
    title: {
        type: String,
        required: false
    },
    menuItems: {
        type: Array,
        required: false
    }
})
</script>

<template>
    <div class="sidebar-page">
        <h2 class="sidebar-page__title">{{ title }}</h2>
        <nav class="sidebar-page__menu-items">
            <RouterLink class="link-item" v-for="item in menuItems" :to="item.url">{{ item.name }}</RouterLink>
        </nav>
    </div>
</template>
<style lang="scss" scoped>
.sidebar-page {
    &__title {
        color: rgb(19, 21, 35);
        font-size: 24px;
        font-weight: 700;
    }

    &__menu-items {
        display: flex;
        flex-direction: column;
        margin-top: 30px;

        .link-item {
            border-radius: 4px;
            padding: 0 18px;
            align-items: center;
            display: flex;
            width: 255px;
            height: 44px;
            text-decoration: none;
            opacity: 0.7;
            color: rgb(19, 21, 35);
            font-size: 14px;
            font-weight: 500;

        }

        .router-link-exact-active {
            opacity: 1;
            color: rgb(255, 255, 255);
            background: rgb(30, 94, 255);
        }

    }
}
</style>