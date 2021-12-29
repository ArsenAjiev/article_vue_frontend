import {createRouter, createWebHistory} from "vue-router";
import Home from "@/components/Home";
import CreateArticle from "@/components/CreateArticle";


const routes = [
    {
        path: '/',
        name: "home",
        component:Home

    },
        {
        path: '/create',
        name: "create",
        component:CreateArticle

    },

]

const router = createRouter({
    history:createWebHistory(),
    routes,
})

export default router;