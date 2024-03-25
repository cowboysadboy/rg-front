<script setup>
import Accordion from '@/components/UI/AccordionElement.vue'
import H3Element from '@/components/UI/H3Element.vue'
import ButtonElement from '@/components/UI/ButtonElement.vue'
import { useStore } from '@/stores/store'
import { computed, ref, onBeforeUpdate } from 'vue'

const store = useStore()

store.fetchData()

const { articleName } = defineProps({
    articleName: {
        type: String,
        required: false
    }
})

const items = ref(store.getContent(articleName))

const filerItems = computed(() => {
    return items.value.content.filter(elem =>
        elem.title.toLowerCase().includes(items.value.filterCount.toLowerCase()) ||
        elem.text.toLowerCase().includes(items.value.filterCount.toLowerCase()))
})

const helpedCount = computed(() => {
    if (items.value.isHelper === true) {
        return items.value.helpedCount + 1
    }
    return items.value.helpedCount
})

const handleInput = () => {
    store.changeFilter(articleName, items.value.filterCount)
}
const updateData = () => {
    const data = {
        filter: items.value.filterCount,
        helper: items.value.isHelper
    }
    store.updateData(data)
}
const changeIsHelp = (elem) => {
    store.changeHelper(articleName, elem)
    updateData()
}
onBeforeUpdate(() => {
    updateData()
});
</script>

<template>
    <div class="search-block">
        <input class="search" type="text" placeholder="Поиск..." v-model="items.filterCount" @input="handleInput"
            @change="updateData">
    </div>
    <div class="article">
        <section v-for="item, i in filerItems" :key="i" class="article__element">
            <h3-element>{{ item?.title }}</h3-element>
            <div v-if="item?.text" v-html="item?.text" class="article__text">
            </div>
            <Accordion v-if="item?.accordion" :data="item.accordion" />
        </section>
        <section class="article__helped">
            <h3-element>Вам помогла эта статья?</h3-element>
            <button-element style="margin-right: 15px;" @click="changeIsHelp(true)">Да</button-element>
            <button-element @click="changeIsHelp(false)">Нет</button-element>
            <p class="helped-p">Статья помогла {{ helpedCount }} людям</p>
        </section>
    </div>
</template>
<style lang="scss" scoped>
.search {
    width: 100%;
    margin-bottom: 5px;
    box-sizing: border-box;
    border: 1px solid rgb(217, 225, 236);
    border-radius: 4px;
    background-image: url(/src/assets/icons/search.svg);
    background-size: auto;
    background-repeat: no-repeat;
    background-position: left;
    color: rgb(161, 167, 196);
    font-size: 16px;
    font-weight: 500;
    padding: 8px 31px;
    background-position-x: 5px;
}

.search::placeholder {
    color: rgb(161, 167, 196);
    font-size: 16px;
    font-weight: 500;
}

.article {
    max-width: 825px;
    border-radius: 6px;
    box-shadow: 0px 1px 4px 0px rgba(21, 34, 50, 0.08);
    background: rgb(255, 255, 255);
    padding: 12px 30px;

    &__element {
        border-bottom: 1px solid rgb(230, 233, 244);
        margin-bottom: 45px;
    }

    &__helped {
        padding-bottom: 30px;

        .helped-p {
            color: rgb(90, 96, 127);
            font-size: 12px;
            font-weight: 400;
            line-height: 16px;
            margin-top: 12px;
        }
    }
}
</style>
