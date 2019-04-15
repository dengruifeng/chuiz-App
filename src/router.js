import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
// 路由
export default new VueRouter({
    routes:[
        {path: "/",component:()=>import('./view/home.vue'),
    children:[
        {path:"home",component:()=>import('./view/home.vue')},
        {path:"fenlei",component:()=>import('./view/fenlei.vue')},
        {path:"shoppingcart",component:()=>import('./view/shoppingcart.vue')},
        {path:"my",component:()=>import('./view/my.vue')},
        {path: '', redirect: '/home' }        
    ]
    },
   
    ]
})