import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [{
    name: 'LOGIN',
    path: '/login',
    component: () => import('@/views/login/Index')
  }
  , {
    path: '/admin',
    component: () => import('@/views/frame/Index'),
    children: [
      {
        name: 'MY_TASKS',
        path: '/myTasks',
        component: () => import('@/views/pages/Table')
      }
    ]
  }
]
});

export default router;
