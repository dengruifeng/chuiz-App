import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
// 路由
export default new VueRouter({
    routes:[
        {path: "/",component:()=>import('./view/home.vue'),
    children:[
        {path:"home",component:()=>import('./view/shouye.vue')},
        {path:"fenlei",component:()=>import('./view/fenlei.vue')},
        {path:"shoppingcart",component:()=>import('./view/shoppingcart.vue')},
        {path:"user",component:()=>import('./view/user.vue')},
        {path: '', redirect: '/home' }        
    ]
    },
    {path:'/login',component: ()=> import('./view/login.vue')},
    {path:'/register',component: ()=> import('./view/register.vue')},
    {path:'/details',component: ()=> import('./view/xiangqing.vue')},
    {path:'/search',component: ()=> import('./view/search.vue')}
    ]
})
