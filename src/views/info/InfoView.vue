<script setup>
import SidebarPage from '@/components/SidebarPage.vue'
const title = 'Настройки профиля'
const menuItems = [
    {
        name: 'Первичная настройка',
        url: '/info',
        icon: ''
    },
    {
        name: 'Профиль пользователя',
        url: '/info/item5',
        icon: ''
    },
    {
        name: 'Изменение общих настроек',
        url: '/info/item4',
        icon: ''
    },
    {
        name: 'Дополнительные возможности',
        url: '/info/item3',
        icon: ''
    },
    {
        name: 'Отправка запросов',
        url: '/info/item2',
        icon: ''
    },
    {
        name: 'Работа со статистикой',
        url: '/info/item1',
        icon: ''
    },
]
</script>

<template>
    <main class="info-base">
        <div class="info-base__sidebar">
            <SidebarPage :title="title" :menuItems />
        </div>
        <div class="info-base__content">
            <RouterView />
        </div>
    </main>
</template>
<style lang="scss" scoped>
.info-base {
    display: flex;
    padding: 30px 40px 40px;

    &__content {
        padding: 40px;
    }
}
</style>