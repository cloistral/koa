import Vue from "vue";
import Antd from 'ant-design-vue';
Vue.use(Antd)
import App from './App';
import 'ant-design-vue/dist/antd.css';
import router from "./router";
import store from "./store";
import http from './util/http'
Vue.use(http)
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
