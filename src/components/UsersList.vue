<script setup>
import H3Element from '@/components/UI/H3Element.vue'
defineProps({
    items: {
        type: Array,
        required: false
    }
})
</script>

<template>
    <div class="links">
        <div v-for="item, i in items" :key="i" class="links__element">
            <h3-element>{{ item.name }}</h3-element>
            <p class="element-p">
                Компания: {{ item.company.name }}
            </p>
            <a class="element-link"  :href="'tel:' + item.phone">{{ item.phone }}</a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.links {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    &__element {
        border-radius: 6px;
        box-shadow: 0px 1px 4px 0px rgba(21, 34, 50, 0.08);
        background: rgb(255, 255, 255);
        padding: 0 28px 20px;
        max-width: 398px;
        margin-top: 30px;

        .element-p {
            margin-top: -10px;
            margin-bottom: 10px;
            color: rgb(19, 21, 35);
            font-size: 14px;
            font-weight: 400;
            line-height: 20px;
        }

        .element-link {
            text-decoration: none;
            color: rgb(30, 94, 255);
            font-size: 14px;
            font-weight: 500;
        }
    }
}
</style>