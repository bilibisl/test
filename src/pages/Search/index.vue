<template>
  <div>
    我是搜索
    <h3>params参数：{{$route.params.keyword}}</h3>
    <h3>query参数：{{$route.query.k}}</h3>
  </div>
</template>

<script>
export default {
  name:'search',
  props:['keyword']

}
</script>

<style>

</style>