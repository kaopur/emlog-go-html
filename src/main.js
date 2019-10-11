import Vue from 'vue'
import App from './App.vue'
// import './assets/public/css/bootstrap.min.css'
// import './assets/public/css/ionicons.min.css'
// import './assets/public/css/custom.css'
import common from "./assets/public/js/common";'./assets/public/js/common'

Vue.config.productionTip = false
Vue.prototype.common = common

new Vue({
  render: h => h(App),
}).$mount('#app')
