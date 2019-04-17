import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
// 路由
window.isLogin = false
  
const router = new VueRouter({
    routes: [{
        path: "/",
        component: () => import('./view/home.vue'),
        children: [{
            path: "home",
            component: () => import('./view/shouye.vue')
        },
        {
            path: "fenlei",
            component: () => import('./view/fenlei.vue')
        },
        {
            path: "shoppingcart",
            component: () => import('./view/shoppingcart.vue'),
            beforeEnter: (to, from, next) => {
                if (!window.isLogin) {
                    // 没有登录
                    alert('请先登录')
                    next({
                        path: '/login',
                        query: {
                            redirect: to.fullPath
                        }
                    })
                } else {
                    next()
                }
            }
        },
        {
            path: "user",
            component: () => import('./view/user/user.vue')
        },
        {
            path: '',
            redirect: '/home'
        }
        ]
    },
    {
        path: '/login',
        component: () => import('./view/user/login.vue'),
        beforeEnter: (to, from, next) => {
            console.log('路由独享的守卫， 只会在要进入login的时候触发')
            next()
        }
    },
    {
        path: '/register',
        component: () => import('./view/user/register.vue')
    },
    {
        path: '/details',
        component: () => import('./view/xiangqing.vue')
    },
    {
        path: '/address',
        component: () => import('./view/user/address.vue'),
        beforeEnter: (to, from, next) => {
            if (!window.isLogin) {
                // 没有登录
                alert('请先登录')
                next({
                    path: '/login',
                    query: {
                        redirect: to.fullPath
                    }
                })
            } else {
                next()
            }
        }
    },
<<<<<<< HEAD
    {path:'/login',component: ()=> import('./view/login.vue')},
    {path:'/register',component: ()=> import('./view/register.vue')},
    {path:'/details',component: ()=> import('./view/xiangqing.vue')},
    {path:'/search',component: ()=> import('./view/search.vue')}
=======
>>>>>>> f87baa5cc237e0f31223b89cc5e175496c989374
    ]
})

router.beforeEach((to, from, next) => {
    //to 将要去的路由对象
    // from 当前的路由对象
    // next 是否允许 如果使用就不跳转
    console.log('全局前置守卫')
    console.log(to)
    console.log(from)
    next();
})
router.afterEach((to, from) => {
    console.log('全局后置守卫')
})

export default router;