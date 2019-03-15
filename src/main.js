import Vue from "vue";
import Demo from "./demo.vue";
import ToastPlugin from './plugin/toast.js';

Vue.use(ToastPlugin);

Vue.config.productionTip = false;

new Vue({
  render: h => h(Demo)
}).$mount("#app");