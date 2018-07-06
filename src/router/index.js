import Vue from 'vue'
import Router from 'vue-router'
import iView from 'iview';
import 'iview/dist/styles/iview.css';

import home from '@/components/home'
import nav from '@/components/nav'
import nav1 from '@/components/nav1'
import nav2 from '@/components/nav2'


Vue.use(Router)
Vue.use(iView);

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/nav',
      name: 'nav',
      component: nav
    },
  
    {
      path: '/nav1',
      name: 'nav1',
      component: nav1
    },
    {
      path: '/nav2',
      name: 'nav2',
      component: nav2
    }
  ]
})
