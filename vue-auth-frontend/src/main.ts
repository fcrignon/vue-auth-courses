import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import Vuetify from 'vuetify';
import store from './store';
import vueRouter from "vue-router";

import Messages from "./components/Messages.vue";
import NewMessage from "./components/NewMessage.vue";
import Message from "./components/Message.vue";
import VueRouter from 'vue-router';
import Register from './components/Register.vue';
import Login from './components/Login.vue';

Vue.use(Vuetify);
Vue.use(vueRouter);

const routes = [
  {path:"/", component:Messages},
  {path:"/NewMessage", component: NewMessage},
  { path: "/Message/:id", component: Message },
  { path: "/Register", component: Register },
  { path: "/Login", component: Login}
]
const router = new VueRouter({routes, mode:'history'})

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
