import './element.scss';
import router from './router';
import Header from './common/header'
import Footer from './common/footer'


new Vue({
    router,
    template: `<div>
                    <app-header/>
                    <router-view/>
                    <app-footer/>
                </div>`,
    components:{
                'app-header':Header,
                'app-footer':Footer

            }


}).$mount('#app')