import './list/item.scss'
import item from './list/item'
import noList from './no-list'
import axios from 'axios'

const MainPage = {

    props: ['standard'],
    template: `<div id='wrap'>
                    <div class='list'>
                        <item-component v-for='list in lists' v-bind:item='list'/>
                        <no-list v-if='lists.length==0'/>
                    </div>
                </div>`,
    components: {
        'item-component': item,
        'no-list':noList
    },
    data() {
        return {
            lists: ''
        }
    },
    created(){
        this.lists = [];
    },
    mounted() {
        setTimeout(() => {
            this.getData()
        }, 500);
    },
    methods: {
        getData() {
            const baseUrl = 'api/data/data.json'
            axios.get(baseUrl)
                .then((then) => {
                    this.lists = then.data
                })
        },
    },
}
export default MainPage;