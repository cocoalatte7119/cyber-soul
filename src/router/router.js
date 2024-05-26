// Vue Routerパッケージのインポート
import { createRouter, createWebHistory } from 'vue-router'

const routes = []

// 一般的なルートの追加（動的インポート）
routes.push(
  {
    path: '/',
    name: 'Anime',
    component: () => import('../components/pages/AnimeTop.vue')
  },
  {
    path: '/top',
    name: 'Top',
    component: () => import('../components/pages/Top.vue')
  },
  {
    path: '/news',
    name: 'News',
    component: () => import('../components/pages/News.vue')
  },
  {
    path: '/story',
    name: 'Story',
    component: () => import('../components/pages/Story.vue')
  },
  {
    path: '/character',
    name: 'Character',
    component: () => import('../components/pages/Character.vue')
  }
)

// 存在しないパスは全てTOPへ
routes.push(
  {
    path: '/:catchAll(.*)',
    redirect: '/top'
  }
)

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// router.beforeEach((to, from) => {
//   // URL直接入力の場合はTOPへ
//   if (to.path != '/' && from.name == undefined) {
//     return '/'
//   }
// })

export default router
