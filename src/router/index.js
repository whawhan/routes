import Vue from 'vue'
import VueRouter from 'vue-router'
import Cookies from 'js-cookie'
// import Home from '../views/Home.vue'
// import About from '../views/About.vue'

Vue.use(VueRouter)

// const routes = [
//   {
//     path: '/',
//     name: 'home',
//     // component: Home
//     component : () => import('../views/Home')
//   },
//   {
//     path: '/about',
//     name: 'about',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//     component: () => import('../views/About')
//   },
//   {
//     path: '*',
//     component: () => import('../views/404')
//   },
//   {
//     path: '/admin',
//     name:'admin',
//     component: () => import('../views/admin/Admin'),
//     children:[
//       {
//         path:'/',
//         component:()=>import(/* webpackChunkName: "about" */ '../views/admin/Admin')
//       },
//       {
//         path:'post',
//         component:()=>import(/* webpackChunkName: "about" */ '../views/admin/Post')
//       },
//       {
//         path:'users',
//         component:()=>import(/* webpackChunkName: "about" */ '../views/admin/Users')
//       },
//       {
//         path:'products',
//         component:()=>import(/* webpackChunkName: "about" */ '../views/admin/Products')
//       }
//     ]
//   }
// ]

const routes = [
  {
    path: '/admin',
    name: 'admin',
    component: () => import(/* webpackChunkName: "AdminLayout" */ '../views/admin/Layout'),
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: '/',
        name: 'admin_home',
        component: () => import(/* webpackChunkName: "AdminHome" */ '../views/admin/Home'),
      },
      {
        path: 'post',
        name: 'post_di_admin',
        component: () => import(/* webpackChunkName: "AdminHome" */ '../views/admin/Post'),
      },
      {
        path: 'users',
        component: () => import(/* webpackChunkName: "AdminHome" */ '../views/admin/Users'),
      },
      {
        path: 'products',
        component: () => import(/* webpackChunkName: "AdminHome" */ '../views/admin/Products'),
      },
    ]
  },
  {
    path: '/',
    name: 'login',
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login')
  },
  {
    path: '*',
    component: () => import(/* webpackChunkName: "About" */ '../views/404')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {

    const auth = Cookies.get('auth')

    if (!auth) {
      next({
        path: '/',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

export default router
