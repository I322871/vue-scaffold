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
    name: 'admin',
    path: '/admin',
    component: () => import('@/views/frame/Index'),
    // children: [
    //   {
    //     name: 'My Tasks',
    //     path: '/myTasks',
    //     component: () => import('@/views/dashboard/Dashboard')
    //   },
    //   {
    //     name: 'My Cars',
    //     path: '/myCars',
    //     component: () => import('@/views/dashboard/tables/RegularTables')
    //   },
    //   {
    //     name: 'Disk Post Management',
    //     path: '/diskPostManagement',
    //     component: () => import('@/views/dashboard/component/Notifications')
    //   },
    //   {
    //     name: 'Affair List',
    //     path: '/affairList',
    //     component: () => import('@/views/dashboard/component/Icons')
    //   }
    // ]
  }
]
});

export default router;
