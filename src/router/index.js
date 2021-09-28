import {createRouter, createWebHashHistory} from 'vue-router';
import HomePage from '@/views/Homepage.vue';
import AddPage from '@/views/Add.vue';
import EditPage from '@/views/Edit.vue';
import Impressum from '@/views/Impressum.vue';

const routes = [
    { path: '/', component: HomePage },
    { path: '/edit/:id', component: EditPage },
    { path: '/add/', component: AddPage },
    { path: '/impressum', component: Impressum }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
export default router;