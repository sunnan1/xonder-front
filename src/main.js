import { createApp } from 'vue'
import './assets/tailwind.css'
import App from './App.vue'
import router from './router'
import mitt from 'mitt';
import store from './store'


const emitter = mitt();
const app = createApp(App);
app.config.globalProperties.emitter = emitter;


app.use(router).use(store).mount('#app');
//createApp(App).use(router).mount('#app');
