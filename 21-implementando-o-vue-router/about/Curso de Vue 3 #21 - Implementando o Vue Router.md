# Curso de Vue 3: #21 - Implementando o Vue Router
Neste vídeo vamos implementar o Vue Router no nosso projeto de #Vue, para poder gerenciar as rotas da aplicação, a de pedido e também a de dashboard futuramente.

------



Com o Vue Router adcionado temos agora uma nova pasta chamada views, onde ficarão todas as nossas páginas do projeto.

No nosso App.vue terá agora uma tag chamada <router-view /> onde serão renderizadas nossas views. 

## Router Link
Também temos a <router-link> que é a tag para criar links para as rotas. Ela tem a propriedade 'to' onde colocamos o link que ela vai representar:
~~~vue
<template>
    <router-link to="/"></router-link>
</template>
~~~

## Configurando as rotas
Para configurar as rotas acessamos o arquivo 'router/index.js' que tem esta estrutura:
~~~js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/pedidos', // caminho de rota que quer utilizar
    name: 'Pedidos', // nome da rota
    component: () => import(/* webpackChunkName: "pedidos" */ '../views/Pedidos.vue') // importa o componente que vai ser renderizado na rota
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
~~~