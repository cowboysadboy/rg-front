<script setup>
import { ref } from 'vue'
const { data } = defineProps({
    data: {
        type: Array,
        required: false
    }
})
const items = ref(data)

const activeSection = ref(0)

const toggleAccordion = (index) => {
    if (activeSection.value !== index) {
        activeSection.value = index
    }
}
</script>

<template>
    <div class="accordion">
        <div class="accordion__header">
            <div v-for="(item, index) in items" :key="index" class="header-element"
                :class="{ 'active': activeSection === index }" @click="toggleAccordion(index)">
                {{ item.title }}
            </div>
        </div>
        <div class="accordion__content">
            {{ items[activeSection].content }}
        </div>

    </div>
</template>

<style lang="scss" scoped>
.accordion {
    padding-bottom: 30px;
    &__header {
        display: flex;
        border-bottom: 1px solid rgb(230, 233, 244);
        margin-bottom: 20px;

        .header-element {
            margin: 10px 32px 0 0;
            padding-bottom: 16px;
            color: rgb(90, 96, 127);
            font-size: 16px;
            font-weight: 500;
            cursor: pointer;
        }

        .active {
            color: rgb(30, 94, 255);
            border-bottom: 2px solid rgb(30, 94, 255);

        }
    }

    &__content {
        color: rgb(19, 21, 35);
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
    }
}
</style>