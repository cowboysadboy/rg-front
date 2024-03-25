<template>
    <button class="button">
        <slot />
    </button>
</template>
<style lang="scss" scoped>
button {
    padding: 8px 23px;
    border: 1px solid rgb(215, 219, 236);
    border-radius: 4px;
    background: rgb(255, 255, 255);
    cursor: pointer;
    color: rgb(30, 94, 255);
    font-size: 14px;
    font-weight: 500;
}
</style>