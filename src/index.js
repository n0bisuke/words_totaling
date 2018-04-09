import Vue from 'vue'
import App from './app.vue'
import 'babel-polyfill'
import {createRouter} from './router'

export function createApp() {  
    let router = createRouter();

    const app = new Vue({
        el: 'app',
        router,
        render: h => h(App),
        components: {app}
    });
    return {app,router};
}

window.onload = () => createApp();