import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store/store";
import "./plugins/firebase"
import { Quasar } from "quasar";
import quasarUserOptions from "./plugins/quasar-user-options";
import cors from 'cors';
import axios from 'axios';
// import Meta from 'vue-meta';
// axios.defaults.baseURL = 'http://localhost:8080';
const app = createApp(App);
app.config.globalProperties.axios = axios;
app
  .use(Quasar, quasarUserOptions)
  .use(store)
  .use(router)
  .use(cors)
  .mount("#app");
