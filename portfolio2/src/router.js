import VueRouter from 'vue-router';
import MainPage from './main/main'
import ListPage from './main/list'
import itemView from './main/item/item'

const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: MainPage,
            name: 'main'
        },
        {
            props:true,
            path: '/:standard',
            component: ListPage,
            name: 'list'
        },
        {
            props:true,
            path: '/:standard/:idx',
            component: itemView,
            name: 'item'
        },
        
]
})

export default router;