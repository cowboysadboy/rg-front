import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/users',
            name: 'users',
            component: () =>
                import ('../views/UsersView.vue')
        },
        {
            path: '/galery',
            name: 'galery',
            component: () =>
                import ('../views/GaleryView.vue')
        },
        {
            path: '/info',
            name: 'info',
            component: () =>
                import ('../views/info/InfoView.vue'),
            children: [{
                    path: '',
                    name: 'info-settings',
                    component: () =>
                        import ('../views/info/InfoSettingsView.vue')
                },
                {
                    path: '/info/:pathMatch(.*)',
                    component: () =>
                        import ('../views/NotFount.vue')
                }
            ]
        },
        {
            path: '/:pathMatch(.*)',
            component: () =>
                import ('../views/NotFount.vue')
        }
    ]
})

export default router