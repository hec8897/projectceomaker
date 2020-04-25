import VueRouter from 'vue-router';
import MainPage from './main/main'
import WorkMainPage from './works/main'
import contactMainPage from './contact/main'
import AboutPage from './About/main'



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
        {
            props:true,
            path: '/contact/:id',
            component:contactMainPage,
            name: 'contact'
        },
        {
            props:true,
            path: '/about/:id',
            component:AboutPage,
            name: 'about'
        },
    ]
})

export default router;