import { createApp } from 'vue'
import App from './components/App.vue'

import './assets/main.css'

createApp(App).mount('#app')
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './components/App.vue';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.mount('#app');