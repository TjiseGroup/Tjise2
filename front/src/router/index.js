import Vue from 'vue'
import Router from 'vue-router'
import bread from '@/components/bread'
import drink from '@/components/drink'
import frutist from '@/components/frutist'
import list from '@/components/list'
import login from '@/components/login'
import dessert from '@/components/dessert'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/bread',
      name: 'bread',
      component: bread
    },
    {
      path: '/drink',
      name: 'drink',
      component: drink
    },
    {
      path: '/frutist',
      name: 'frutist',
      component: frutist
    },
    {
      path: '/list',
      name: 'list',
      component: list
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/dessert',
      name: 'dessert',
      component: dessert
    }
  ]
})
