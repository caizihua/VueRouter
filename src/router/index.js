import Vue from "vue";
//配置路由相关信息
import Router from "vue-router";
//导入路由组件
import home from "@/components/home";
import about from "@/components/about";

//通过Vue.use(插件)，安装插件
Vue.use(Router);

const routes = [
  //创建映射关系
  {
    path: "/home",
    name: "HelloWorld",
    component: home
  },
  {
    path: "/about",
    component: about
  },
  {
    path: "/",
    redirect: "/home"
  }
];

//创建路由对象
//并将其导出
export default new Router({
  //配置路径和组件之间的关系
  routes,
  mode: "history",
  linkActiveClass: "active"
});
