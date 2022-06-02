import Vue from 'vue'
import Router from 'vue-router'
import Modal from './views/Modal.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'modal',
      component: Modal
    },
    {
      path: '/list',
      name: 'list',
      component: () => import(/* webpackChunkName: "list" */ './views/List.vue')
    },
    {
      path: '/drawer',
      name: 'drawer',
      component: () =>
        import(/* webpackChunkName: "list" */ './views/Drawer.vue')
    },
    {
      path: '/simple',
      name: 'simple',
      component: () => import(/* webpackChunkName: "list" */ './views/Simple')
    },
    {
      path: '/stagger',
      name: 'stagger',
      component: () => import(/* webpackChunkName: "list" */ './views/Stagger')
    },
    {
      path: '/state',
      name: 'state',
      component: () => import(/* webpackChunkName: "list" */ './views/State')
    },
    {
      path: '/timeline',
      name: 'state',
      component: () => import(/* webpackChunkName: "list" */ './views/Timeline')
    }
  ]
})
