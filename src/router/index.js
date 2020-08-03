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
  }, {
    path: '/admin',
    redirect: { name: 'MY_TASKS' },
    component: () => import('@/views/frame/Index'),
    children: [{
      name: 'MY_TASKS',
      path: 'myTasks',
      component: () => import('@/views/pages/Table')
    }]
  }, {
    path: '*',
    redirect: { name: 'MY_TASKS' }
  }]
});

export default router;
