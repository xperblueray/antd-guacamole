import Vue from 'vue/dist/vue.esm.js'
import App from './App'
import 'ant-design-vue/dist/antd.css'
import Antd from 'ant-design-vue'


Vue.config.productionTip = false;

Vue.use(Antd);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
});