import { defineStore } from 'pinia'
import axios from 'axios';

export const useStore = defineStore({
    id: 'store',
    state: () => ({
        user: {
            name: 'Саша Опытная',
            avatarUrl: ''
        },
        articles: [{
            id: 0,
            name: 'info',
            filterCount: '',
            helpedCount: 50,
            isHelper: false,
            content: [{
                    id: 0,
                    title: 'Первичная настройка',
                    text: '<p>текст, который можно проверить в поиске Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae temporibus rerum quibusdam natus. <span> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, quod?</span></p>'
                },
                {
                    id: 1,
                    title: 'Начало работы',
                    text: '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae temporibus rerum quibusdam natus.</p><ol><li>Lorem ipsum dolor sit amet.</li><li>Lorem ipsum dolor sit amet.</li><li>Lorem ipsum dolor sit amet.</li></ol>'
                },
                {
                    id: 2,
                    title: 'Дополнительная информация',
                    text: '',
                    accordion: [{
                            title: 'Пункт 11',
                            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae temporibus rerum quibusdam natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae temporibus rerum quibusdam natus.',
                        },
                        {
                            title: 'Пункт 10',
                            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae temporibus rerum quibusdam natus.',
                        },
                        {
                            title: 'Пункт 12',
                            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae temporibus rerum quibusdam natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae temporibus rerum quibusdam natus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae temporibus rerum quibusdam natus.',
                        }
                    ]
                }
            ]
        }]
    }),
    actions: {
        changeFilter(nameArticle, filterValue) {
            this.articles.find(elem => elem.name === nameArticle).filterCount = filterValue
        },
        changeHelper(nameArticle, isHelper) {
            this.articles.find(elem => elem.name === nameArticle).isHelper = isHelper
        },
        changeAvatar(url) {
            this.user.avatarUrl = url
        },

        async fetchData() {
            try {
                const response = await axios.get('http://localhost:3000');
                this.articles.find(elem => elem.name === 'info').filterCount = response.data.searchFilter;
                this.articles.find(elem => elem.name === 'info').isHelper = response.data.isHelper;
            } catch (error) {
                console.error(error);
            }
        },

        async updateData(data) {
            try {
                await axios.post('http://localhost:3000', data);
            } catch (error) {
                console.error(error);
            }
        },

        async fetchAvatar() {
            try {
                const response = await axios.get('http://localhost:3000/avatar');
                this.user.avatarUrl = response.data;
            } catch (error) {
                console.error(error);
            }
        },

        async updateAvatar(data) {
            try {
                await axios.post('http://localhost:3000/avatar', data);
            } catch (error) {
                console.error(error);
            }
        },

    },
    getters: {
        getContent(state) {
            return (name) => state.articles.find(elem => elem.name === name)
        },
        getUser(state) {
            return state.user
        }
    }
});