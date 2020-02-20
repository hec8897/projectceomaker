import 'babel-polyfill'
import Nav from './component/nav.js'
new Vue({
    template: `<div>
                <app-nav></app-nav>
                </div>`,
    components:{
                'app-nav':Nav
                }
}).$mount('#app')