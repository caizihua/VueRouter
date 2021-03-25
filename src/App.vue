<template>
  <div id="app">
    <router-view></router-view>
    <!--     <router-link to="/home" tag="button" active-class="active" replace
      >首页</router-link
    >
    <router-link to="/about" tag="button" active-class="active" replace
      >关于</router-link
    > -->
    <!-- <router-link to="/home" tag="button" replace>首页</router-link>
    <router-link to="/about" tag="button" replace>关于</router-link> -->
    <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    homeClick() {
      //通过代码修改路由 vue-router
      this.$router.push("/home");
      console.log("homeClick");
    },
    aboutClick() {
      this.$router.push("/about");
      console.log("aboutClick");
    },
  },
};
</script> 

<style scoped>
/* .router-link-active {
  color: red;
} */
.active {
  color: red;
}
</style>