import {createRouter, createWebHistory} from "vue-router";
import Home from "@/components/Home";
import CreateArticle from "@/components/CreateArticle";
import ArticleDetail from "./components/ArticleDetail";


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
         {
        path: '/details/:id',
        name: "details",
        component:ArticleDetail,
        props:true

    }

]

const router = createRouter({
    history:createWebHistory(),
    routes,
})

export default router;