import vue from 'vue'
import VueRouter from 'vue-router'
import Home from "./components/Home";
import PostMain from './components/Main';
import SinglePost from './components/SinglePost';
vue.use(VueRouter);
const routes = [
    {
        path : '',
        component : PostMain,
        name : "main",
        children : [
            {
                path : '',
                component : Home,
                name:'home'
            },
            {
                path: ':id',
                component : SinglePost,
                name : 'singlePost'
            },
        ]
    },
];
const router = new VueRouter({
    routes,
    mode : "history"
})
export default router;