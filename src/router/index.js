//配置路由的地方
import Vue from "vue";
import VueRouter from "vue-router";
//使用插件
Vue.use(VueRouter)
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'
export default new VueRouter({
    //配置路由
    routes: [
        {
            path: "/home",
            component: Home,
            meta:{show:true}
        },
        {
            path: "/login",
            component: Login,
            meta:{show:false}
        },
        {
            path: "/register",
            component: Register,
            meta:{show:false}
        },
        {
            path: "/search/:keyword?",  //可以在占位的后面加上？，可以指定params参数可传可不传
            component: Search,
            meta:{show:true},
            name:"search",
            props:true   //路由可以传递props参数，需要在组件上接收一下
        },
        //重定向，在项目跑起来的时候，访问/，立马让他定向到首页
        {
            path:"*",
            redirect:'/Home'
        }
    ]
})