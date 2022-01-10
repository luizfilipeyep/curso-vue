import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            title: 'Home | Make Your Burger'
        }
    },
    {
        path: '/pedidos',
        name: 'Pedidos',
        component: () => import(/* webpackChunkName: "pedidos" */ '../views/Pedidos.vue'),
        meta: {
            title: 'Pedidos | Make Your Burger'
        }
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router