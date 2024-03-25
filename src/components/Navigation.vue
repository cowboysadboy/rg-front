<script setup>
const menuItems = [
    {
        name: 'Главная',
        url: '/',
        icon: 'star'
    },
    {
        name: 'Запросы',
        url: '/about',
        icon: 'menu'
    },
    {
        name: 'Заметки',
        url: '/zametki',
        icon: 'vector'
    },
    {
        name: 'Галерея',
        url: '/galery',
        icon: 'folder'
    },
    {
        name: 'Пользователи',
        url: '/users',
        icon: 'persons'
    },
    {
        name: 'Статистика',
        url: '/statistika',
        icon: 'data'
    },
    {
        name: 'Избранное',
        url: '/izbrannoe',
        icon: 'star'
    },
    {
        name: 'Поддержка',
        url: '/podderjka',
        icon: 'message'
    },

]
const infoItems = [
    {
        name: 'База знаний',
        url: '/info',
        icon: 'question'
    },
    {
        name: 'Обновления',
        url: '/update',
        icon: 'medal'
    },
]
const settingItem = [
    {
        name: 'Профиль',
        url: '/profil',
        icon: 'user'
    },
    {
        name: 'Общие настройки',
        url: '/settings',
        icon: 'setting'
    }
]

</script>
<template>
    <div class="navigation">
        <nav class="navigation__items">
            <RouterLink v-for="item in menuItems" :class="{
                'link-item': true,
            }" :to="item.url">
                <div :class="'icon ' + item.icon"></div>
                {{ item.name }}
                <div v-if="item.name === 'Запросы'" class="count">16</div>
            </RouterLink>
        </nav>
        <span class="nav-title">Информация</span>
        <nav class="navigation__items">
            <RouterLink v-for="item in infoItems" :class="{
                'link-item': true
            }" :to="item.url">
                <div :class="'icon ' + item.icon"></div>
                {{ item.name }}
            </RouterLink>
        </nav>
        <span class="nav-title">Настройки</span>
        <nav class="navigation__items">
            <RouterLink v-for="item in settingItem" :class="{
                'link-item': true
            }" :to="item.url">
                <div :class="'icon ' + item.icon"></div>
                {{ item.name }}
            </RouterLink>
        </nav>
    </div>
</template>
<style lang="scss" scoped>
.navigation {
    padding: 16px;
    max-width: 250px;
    display: flex;
    flex-direction: column;

    &__items {
        display: flex;
        flex-direction: column;

        .link-item {
            position: relative;
            margin: 3px 0;
            width: 218px;
            height: 44px;
            text-decoration: none;
            display: flex;
            align-items: center;
            color: rgb(90, 96, 127);
            font-size: 14px;
            font-weight: 500;
            border-radius: 4px;

            .count {
                position: absolute;
                right: 5px;
                border-radius: 12px;
                background: rgb(19, 21, 35);
                color: rgb(255, 255, 255);
                font-size: 12px;
                font-weight: 700;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 1px 6px;
            }

            .star {
                background: url(@/assets/icons/star.svg);
            }

            .question {
                background: url(@/assets/icons/question.svg);
            }

            .user {
                background: url(@/assets/icons/person.svg);
            }

            .setting {
                background: url(@/assets/icons/setting.svg);
            }

            .medal {
                background: url(@/assets/icons/medal.svg);
            }

            .vector {
                background: url(@/assets/icons/vector.svg);
            }

            .data {
                background: url(@/assets/icons/data.svg);
            }

            .message {
                background: url(@/assets/icons/message.svg);
            }

            .setting {
                background: url(@/assets/icons/setting.svg);
            }

            .menu {
                background: url(@/assets/icons/menu.svg);
            }

            .folder {
                background: url(@/assets/icons/folder.svg);
            }

            .persons {
                background: url(@/assets/icons/persons.svg);
            }

            .icon {
                width: 30px;
                height: 30px;
                background-repeat: no-repeat;
                background-position: center;
                margin-right: 15px;
            }

        }

        .link-item:hover {
            background: rgb(79, 129, 255);
            color: rgb(255, 255, 255);

        }

        .router-link-exact-active,
        .router-link-active {
            color: rgb(255, 255, 255);
            background: rgb(30, 94, 255);
        }

        .router-link-active:hover {
            background: rgb(30, 94, 255);

        }
    }

    .nav-title {
        color: rgb(161, 167, 196);
        font-size: 12px;
        font-weight: 600;
        line-height: 16px;
        margin-top: 28px;
        margin-bottom: 12px;
    }
}
</style>