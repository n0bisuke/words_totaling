import Vue from 'vue'
import App from './app.vue'
import 'babel-polyfill'

export function createApp() {    
    const app = new Vue({
        el: 'app',
        render: h => h(App),
        components: {app}
    });
    return {app};
}

window.onload = () => createApp();