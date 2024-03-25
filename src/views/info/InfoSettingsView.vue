<script setup>
import Article from '@/components/Article.vue'
import LinksBlock from '@/components/LinksBlock.vue'

const articleName = 'info'
const links = [
    {
        title: 'Сообщество GusevFilm',
        text: 'Обращайтесь за помощью к членам сообщества, задавайте любые вопросы и получайте ответы.',
        link_text: 'Присоединиться к сообществу',
        url: '#'
    },
    {
        title: 'GusevFilm Connect',
        text: 'Пользуйтесь всеми возможностями GB. Пройдите регистрацию в GB Connect.',
        link_text: 'Регистрация',
        url: '#'
    }
]
</script>

<template>
    <main>
        <Article :articleName="articleName" />
        <LinksBlock :items="links" />
    </main>
</template>
<style lang="scss" scoped></style>