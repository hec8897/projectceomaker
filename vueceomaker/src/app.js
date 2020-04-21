import './element.scss';
import router from './router';
import Header from './common/header'

new Vue({
    router,
    template: `<div>
                    <app-header/>
                    <router-view/>
                </div>`,
    components:{
                'app-header':Header
            }


}).$mount('#app')