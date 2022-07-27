<template>
<div>
  <Header></Header>
  <router-view></router-view>
  <!-- 在Home、Search显示的，在登录、注册时隐藏 -->
  <!-- <Footer v-show="$route.path =='/home' || $route.path == '/search'"></Footer> -->  <!-- 我们可以根据组件身上的$route获取当前路由的信息，通过路由路径判断Footer.显示与隐藏 -->
  <Footer v-show="$route.meta.show"></Footer>
</div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
   name:'App',
   components:{ Header,Footer }
}
</script>

<style>

</style>