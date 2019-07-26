import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('../layout/main.vue'),
      children: [
        {
          path: '/',
          name: 'dashboard',
          component: () => import('../pages/dashboard/'),
          meta: {
            requiresAuth: true,
          }
        },
        {
          path: '/news/:id',
          name: 'detailNews',
          component: () => import('../pages/news/'),
          meta: {
            requiresAuth: true,
          }
        },
        {
          path: '/news/create',
          name: 'createNews',
          component: () => import('../pages/news/createNews.vue'),
          meta: {
            requiresAuth: true,
          }
        },
        {
          path: '/news/*',
          redirect: '/',
          meta: {
            requiresAuth: true,
          }
        }
      ],
      meta: {
        requiresAuth: true,
      }
    },
    {
      name: 'login',
      path: '/login',
      component: () => import('../pages/login/login.vue'),
      meta: {
        requiresGuest: true,
      },
    },
    {
      name: 'register',
      path: '/register',
      component: () => import('../pages/login/register.vue'),
      meta: {
        requiresGuest: true,
      },
    }
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ "../views/About.vue")
    // }
  ]
});
