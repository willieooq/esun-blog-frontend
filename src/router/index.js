import { createWebHistory, createRouter } from "vue-router";
import WelcomeView from "../components/WelcomeView.vue";
import LoginView from "@/components/LoginView.vue";
import RegisterView from "@/components/RegisterView.vue";
import LogoutView from "@/components/LogoutView.vue";
import PostPage from "@/components/PostPage.vue";
import Post from "@/components/Post.vue";

const routes = [
    {
        path: "/",
        component:LoginView,
    },{
        path: "/user",
        children: [
            { path: "info", component: WelcomeView },
            { path: "login", component: LoginView },
            { path: "logout", component: LogoutView }]
    },{
        path: "/WelcomePage",
        component: () => import('../components/WelcomeView.vue'),
    },{
        path: "/LoginPage",
        component: () => import('../components/LoginView.vue'),
    }, {
        path: "/RegisterPage",
        component: RegisterView,
    }, {
        path: "/PostPage",
        component: PostPage,
        children: [{ path: ":id", component: Post,props:true}]
    }

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: routes,
    linkActiveClass: 'active'
})



export default router;