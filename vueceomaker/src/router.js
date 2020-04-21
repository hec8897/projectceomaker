import VueRouter from 'vue-router';
import MainPage from './main/main'

const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: MainPage,
            name: 'main'
        },
        {
            props:true,
            path: '/works/:cate',
            component: MainPage,
            name: 'works'
        },
    ]
})

export default router;