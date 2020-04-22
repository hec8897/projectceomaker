import VueRouter from 'vue-router';
import MainPage from './main/main'
import WorkMainPage from './works/main'


const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: MainPage,
            name: 'main'
        },
        {
            props:true,
            path: '/:cate',
            component: MainPage,
            name: 'main'
        },
        {
            props:true,
            path: '/works/:cate',
            component: WorkMainPage,
            name: 'works'
        },
    ]
})

export default router;