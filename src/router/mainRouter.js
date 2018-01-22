import Home from '@/components/HelloWorld'

const routers = [
    {
        path: '/home',
        name: 'home',
        component: Home,
        meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
        },
    },
    {
      path: '/',
          component: Home
    }
];

export default routers
