<script setup>
</script>

<template>
    <div class="logo">
        <img src="@/assets/logo.svg" alt="" class="logo__img">
        <div class="logo__text">GUSEVFILM</div>
    </div>
</template>

<style lang="scss" scoped>
.logo {
    display: flex;
    align-items: center;

    &__text {
        display: flex;
        align-items: center;
        color: rgb(0, 0, 0);
        font-size: 21.7px;
        font-weight: 700;
        margin-left: 10px;
    }
}
</style>