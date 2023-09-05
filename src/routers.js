import Home from './components/Home.vue'
import Coctail_Search from './components/Coctail_Search.vue'
import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
    {
        name: "Home",
        component: Home,
        path:"/",
    },
    {
        name:"Coctail_Search",
        components:Coctail_Search,
        path:"/coctail_search",
    },

];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;