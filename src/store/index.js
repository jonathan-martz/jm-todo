import { createStore } from 'vuex'
import moduleBreadcrumb from '@/store/modules/breadcrumb.js';
import moduleNav from '@/store/modules/nav.js';
import moduleTodo from '@/store/modules/todo.js';

const store = createStore({
    modules: {
        nav: moduleNav,
        todo: moduleTodo,
        breadcrumb: moduleBreadcrumb,
    }
})

export default store;