import './app.scss'
import router from './router'
import Header from './common/header'
import Gnb from './common/gnb'


new Vue({
    router,
    template: `<div>
        <app-header/>
        <app-gnb />
        <router-view />
    </div>`,
    components: {
        'app-header': Header,
        'app-gnb':Gnb
    }
}).$mount('#app')