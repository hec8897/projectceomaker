import 'babel-polyfill'
import Nav from './component/nav.js'
import preViewMain from './component/preview-main'
import axios from 'axios'
import EventBus from './eventbus'
import './index.less'
new Vue({
    template: `<div>
                <h1><img src='images/ci_color.png'></h1>
                <app-nav></app-nav>
                <view-main></view-main>
                </div>`,
    components: {
        'app-nav': Nav,
        'view-main': preViewMain
    },
    data() {
        return {
            lists: null
        }
    },
    created() {
        const baseUrl = 'data/data.json'
        axios.get(`${baseUrl}`)
            .then((data) => {
                this.lists = data.data
                EventBus.$emit('lists', data.data)

                let NavList = new Array();
                for (let i = 0; i < this.lists.length; i++) {
                    NavList.push(this.lists[i].title)
                }
                EventBus.$emit('navs', NavList)
            })

    },
    updated() {


    }
}).$mount('#app')