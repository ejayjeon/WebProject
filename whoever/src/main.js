import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router';
import store from './store/store';
import { Quasar } from 'quasar';
import quasarUserOptions from './plugins/quasar-user-options';
import axios from 'axios';
// axios.defaults.baseURL = 'http://localhost:8080';
import cors from 'cors';

const app = createApp(App);
app.config.globalProperties.axios = axios;
app.use(Quasar, quasarUserOptions)
	.use(store)
	.use(router)
	.use(cors)
	.mount('#app');
