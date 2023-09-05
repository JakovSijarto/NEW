import { createRouter, createWebHashHistory  } from "vue-router";

import Home from "../components/pages/home.vue"
import Coctail_Search from "../components/pages/Coctail_Search.vue"
import NotFound from "../components/NotFound.vue"

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/Coctail_Search',
        component: Coctail_Search
    },
    {
        path: '/:pathMatch(.*)*',
        component: NotFound
    },

]

const router = createRouter({
    history: createWebHashHistory(),
    routes 
})

export default router 