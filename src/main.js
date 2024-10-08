// main.js
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

import App from './App.vue';
import { createPinia } from 'pinia';
import router from './router';
import { createApp } from 'vue';
import i18n from './i18n'; // Import du fichier i18n

// Création de l'application Vue
const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);
app.use(i18n); // Utilisation de i18n

app.mount('#app');
