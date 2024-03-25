<script setup>
import UserSection from './UserSection.vue'
import Logo from './Logo.vue'

</script>

<template>
    <div class="header">
        <Logo />
        <UserSection />
    </div>
</template>

<style lang="scss" scoped>
.header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 68px;
    background-color: white;
    padding: 20px 15px;
    box-shadow: 0px 1px 4px 0px rgba(21, 34, 50, 0.08);
}
</style>