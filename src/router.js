import Vue from 'vue'
import Router from 'vue-router'
import CsvPages from './pages/csv/main.vue'
import TextPages from './pages/text/main.vue'

Vue.use(Router);

export function createRouter() {
    return new Router({
        // mode: 'history',
        linkExactActiveClass: 'is-active',
        scrollBehavior: () => ({ y: 0 }),
        routes: [
            { path: '/csv', name: 'csv', component: CsvPages },
            { path: '/', name: 'text', component: TextPages },
            { path: '*', redirect: '/' },
        ],
    });
}
