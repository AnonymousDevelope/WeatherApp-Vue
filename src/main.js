import { createApp } from 'vue';
import "bootstrap/dist/css/bootstrap.min.css";
import App from './App.vue';
import uiComponents from './ui-components';
import store from './store';

const app = createApp(App);

uiComponents.forEach(component => app.component(component.name, component));

app.use(store);
app.mount('#app');

