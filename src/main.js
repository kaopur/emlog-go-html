import Vue from 'vue'
// import App from './App.vue'
// import './assets/public/css/bootstrap.min.css'
// import './assets/public/css/ionicons.min.css'
// import './assets/public/css/custom.css'
import common from "./assets/public/js/common";
import axios from 'axios'
import qs from 'qs'
import VueRouter from "vue-router"
import Blog from "./components/Blog";
import Index from './components/Index'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import BlogList from "./components/BlogList";

Vue.use(VueRouter)
Vue.use(ElementUI);

Vue.prototype.$qs = qs;
Vue.prototype.$http = axios;


Vue.config.productionTip = false
Vue.prototype.common = common


let router = new VueRouter({
  routes: [
      {//查看一篇文章的内容
          path: "/blog/*",
          component: Blog
      },
      {//点击导航,查看对应文章列表
          path: "/navi/*",
          component: BlogList
      }
      ]
})

new Vue({
  render: h => h(Index),
  router: router, //可以简写router
}).$mount('#app')
